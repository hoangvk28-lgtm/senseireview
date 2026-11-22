const s=process.argv[2];const d='scripts/clone/work/';
const c=require('../../../'+d+s+'.compact.json'),o=require('../../../'+d+s+'.spec.json');
const keep=new Set(o.products.map(p=>p.id));
console.log(o.mainKeyword,'| old:',o.guideTitle);
for(const i of c.items){if(!i.underCap)continue;console.log((keep.has(i.asin)?'K ':'  ')+i.asin,i.brand,'|',i.title.slice(0,95),'|',i.priceTier.split(' ')[0],'|',(i.features||[]).slice(0,keep.has(i.asin)?0:3).map(f=>f.slice(0,130)).join(' ; '));}
const dr=o.products.filter(p=>!c.items.find(i=>i.asin===p.id&&i.underCap));
console.log('OLD dropped:',dr.map(p=>p.id+' '+p.name).join(' || '));
console.log('OLD kept:');
o.products.filter(p=>!dr.includes(p)).forEach(p=>console.log('  ',p.id,'|',p.badge,'|',p.name,'|',p.specs.join(';'),'|',p.bestFor));
const toks=[...new Set(dr.flatMap(x=>{const w=x.name.split(' ');return [w.slice(0,2).join(' '),w[1]&&/\d/.test(w[1])?w[1]:null].filter(Boolean)}))];
const extra=process.argv.slice(3);toks.push(...extra);
for(const p of o.products){if(dr.includes(p))continue;for(const [k,v] of Object.entries(p)){if(['id','amazonUrl','imageUrl','rank','price'].includes(k))continue;const arr=[].concat(v).map(x=>typeof x==='string'?x:JSON.stringify(x));for(const a of arr)for(const sen of a.split(/(?<=[.;])\s+/))if(toks.some(t=>sen.includes(t)))console.log('  M',p.id.slice(-4),k,'::',sen);}}
{const tk=[...new Set(dr.flatMap(x=>x.name.split(' ').slice(0,2)))];const out=[];for(const k of ['specDecoder','howWeEvaluated','maintenance']){const j=JSON.stringify(o[k]);out.push(k+':'+tk.filter(t=>t.length>3&&j.includes(t)).join('/'));}console.log('SEC mentions',out.join('  '));}
