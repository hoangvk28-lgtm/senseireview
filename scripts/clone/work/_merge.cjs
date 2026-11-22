const fs=require('fs');const s=process.argv[2];const d='scripts/clone/work/';
const o=JSON.parse(fs.readFileSync(d+s+'.spec.json','utf8'));
const c=JSON.parse(fs.readFileSync(d+s+'.compact.json','utf8'));
const p=JSON.parse(fs.readFileSync(d+s+'.patch.json','utf8'));
const old=Object.fromEntries(o.products.map(x=>[x.id,x]));
const cm=Object.fromEntries(c.items.map(i=>[i.asin,i]));
const prods=p.products.map((x,i)=>{
  if(!cm[x.id]||cm[x.id].underCap!==true) throw new Error('not underCap '+x.id);
  const b=old[x.id]?{...old[x.id],...x}:{...x};
  b.rank=i+1; if(!old[x.id]){delete b.amazonUrl;delete b.imageUrl;b.price='';}
  return b;});
const fx=p.fixes||[];delete p.fixes;let fxu=new Set();const ap=v=>typeof v==='string'?fx.reduce((a,[f,t])=>{if(a.includes(f)){fxu.add(f);return a.split(f).join(t)}return a},v):Array.isArray(v)?v.map(ap):v&&typeof v==='object'?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,ap(x)])):v;
for(const b of prods){if(old[b.id]){for(const k of ['description','pros','cons','bestFor','badge','name']){b[k]=ap(b[k])}}}
for(const [f] of fx)if(!fxu.has(f))console.log('FIX UNUSED',f);
const dropped=o.products.filter(x=>!prods.find(y=>y.id===x.id));
for(const k of Object.keys(p)) if(k!=='products') o[k]=p[k];
o.products=prods;o.heroImage=cm[prods[0].id].imageUrl;o.lastUpdated='2026-11-22';
fs.writeFileSync(d+s+'.spec.json',JSON.stringify(o,null,2));
const txt=JSON.stringify(o);
let w=0;(function f(v){if(typeof v==='string')w+=v.split(/\s+/).filter(Boolean).length;else if(v&&typeof v==='object')Object.entries(v).forEach(([k,x])=>{if(!['id','amazonUrl','imageUrl','heroImage','guideSlug','href'].includes(k))f(x)})})({...o,relatedGuides:0});
console.log('words~',w,'products',prods.length,'meta',o.metaTitle.length,o.metaDescription.length);
for(const x of dropped){const t=x.name.split(/\s+/)[0];const m=txt.split(t).length-1;if(m)console.log('WARN mentions dropped brand',t,m);}
if(/[—–]/.test(txt))console.log('WARN dash');
const dol=txt.match(/\$[0-9][0-9,.]*/g);console.log('dollars',[...new Set(dol||[])].join(' '));
