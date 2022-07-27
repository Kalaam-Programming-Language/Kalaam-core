const tW = (strings) => {
  return strings
    .map((s) => s.replace(/\s+/g, "\n"))
    .join("")
    .trim();
};

export const BanglafactorialOf = tW`
factorialOf=5
  f=1
  count=1
  
  যদি(factorialOf == 0 || factorialOf < 0){
    দেখাও("Invalid Input")
  }
  
  যখন(count < factorialOf+1){
    f=f*count
    count=count+1
  }
  
  দেখাও("Factorial of" + factorialOf + " is " + f)
      
`;
