const tW = (strings) => {
  return strings
    .map((s) => s.replace(/\s+/g, '\n'))
    .join('')
    .trim();
};

export const OdiafactorialOf = tW`
 factorialOf=5
   f=1
   count=1
   
   ଯଦି(factorialOf == 0 || factorialOf < 0){
     ଦେଖାଅ("Invalid Input")
   }
   
   ଯେପର୍ଯ୍ୟନ୍ତ(count < factorialOf+1){
     f=f*count
     count=count+1
   }
   
   ଦେଖାଅ("Factorial of" + factorialOf + " is " + f)
   
     
       
       `;
