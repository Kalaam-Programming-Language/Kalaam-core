const tW = (strings) => {
     return strings
       .map((s) => s.replace(/\s+/g, "\n"))
       .join("")
       .trim();
   };
   
   export const OdiaCheckPrime = tW`
   count=2
   number=11
   flag=0
   ଯେପର୍ଯ୍ୟନ୍ତ(count<number)
   {
   
     ଯଦି(number%count==0){
       flag=flag+1
      
     }
   
   
   count=count+1
   
   
   }
   ଯଦି(flag==0){
     দেখাও("Prime")
    
   }ଯଦି(flag>0){
     ଦେଖାଅ("Not Prime")
   }
   
   
   
   `;
   