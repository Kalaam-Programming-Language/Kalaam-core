const tW = (strings) => {
     return strings
         .map((s) => s.replace(/\s+/g, '\n'))
         .join('')
         .trim();
 };
 
 export const Odiaforloop = tW`
 ଦୋହରାଅ x କୁ (0,10) ମଧ୍ୟରେ
 
 {
 
 value= x*5
 
 ଦେଖାଅ(value)
 
 }
 `;
 