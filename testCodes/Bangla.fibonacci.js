const tW = (strings) => {
  return strings
    .map((s) => s.replace(/\s+/g, "\n"))
    .join("")
    .trim();
};

export const Banglafibonacci = tW`Fibonacci=[]
  সন্ধানে a যে (0,10) মাঝে
  {
    যদি (a<3)
  {
  Fibonacci[a]=a
  }
  যদি (a>1)
  {
  x=Fibonacci[a-2]
  y=Fibonacci[a-1]
  Fibonacci[a]=x+y
  }
  }
  
  দেখাও(Fibonacci)
  }
  
    
    `;
