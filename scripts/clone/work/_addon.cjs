// usage: node _addon.cjs slug addon.json  (addon: {criteriaAppend:[...6 strings], faqAdd:[{q,a}], extraProducts...})
const fs=require('fs');const [,,s,a]=process.argv;
const p=JSON.parse(fs.readFileSync(s+'.patch.json','utf8'));const x=JSON.parse(fs.readFileSync(a,'utf8'));
(x.criteriaAppend||[]).forEach((t,i)=>{if(t&&p.buyingCriteria[i])p.buyingCriteria[i].explanation+=' '+t});
(x.faqAdd||[]).forEach(f=>p.faq.push(f));
(x.specAdd||[]).forEach(f=>p.specDecoder.push(f));
fs.writeFileSync(s+'.patch.json',JSON.stringify(p,null,1));
