const tW = (strings) => {
  return strings
    .map((s) => s.replace(/\s+/g, "\n"))
    .join("")
    .trim();
};

export const Banglafunction1 = tW`FirstName='Sachin'

  LastName='Tendulkar'
  
  
  পর্ব Kalamrecursion(test)
  
  {
  
    যদি (test < 1) {
        return;
    }
    
    দেখাও('আমরা এখন বাংলায় কোড করতে পারি')
    
    
    
  
  }
  
  
  Kalamrecursion(10)
  
  
  `;
