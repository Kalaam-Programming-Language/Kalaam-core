const tW = (strings) => {
  return strings
    .map((s) => s.replace(/\s+/g, "\n"))
    .join("")
    .trim();
};

export const BanglaReverseNumber = tW`
  
numbers=123
  

পর্ব বিপরীতসংখ্যা(numbers) {
res=0
  যখন(numbers>0){
    res=res*10+numbers%10
    numbers=numbers/10|0
    }
 দেখাও(res)
}

বিপরীতসংখ্যা(numbers)
  
    `;


