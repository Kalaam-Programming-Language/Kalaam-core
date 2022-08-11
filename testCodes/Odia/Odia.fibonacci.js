const tW = (strings) => {
     return strings
         .map((s) => s.replace(/\s+/g, '\n'))
         .join('')
         .trim();
 };
 
 export const Odiafibonacci = tW`Fibonacci=[]
 ଦୋହରାଅ a କୁ (0,10) ମଧ୍ୟରେ
   {
     ଯଦି (a<3)
   {
   Fibonacci[a]=a
   }
   ଯଦି (a>1)
   {
   x=Fibonacci[a-2]
   y=Fibonacci[a-1]
   Fibonacci[a]=x+y
   }
   }
   
   ଦେଖାଅ(Fibonacci)
   }
   
     
     `;
 