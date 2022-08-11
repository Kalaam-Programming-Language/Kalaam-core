const tW = (strings) => {
     return strings
       .map((s) => s.replace(/\s+/g, "\n"))
       .join("")
       .trim();
   };
   
   export const Banglafunction1 = tW`FirstName='Sachin'
   
     LastName='Tendulkar'
     
     
     ବିଭାଗ Kalamrecursion(test)
     
     {
     
       ଯଦି (test < 1) {
           return;
       }
       
       ଦେଖାଅ('ବର୍ତ୍ତମାନ ଆମେ ଓଡିଆରେ କୋଡ୍ କରିପାରିବା')
       
       
       
     
     }
     
     
     Kalamrecursion(10)
     
     
     `;
   