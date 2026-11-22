const c=require('../../../scripts/clone/work/'+process.argv[2]+'.compact.json');
for(const a of process.argv.slice(3)){const i=c.items.find(x=>x.asin==a);console.log(a,i.title.slice(0,110),'\n  ',i.features.join('\n   '));}
