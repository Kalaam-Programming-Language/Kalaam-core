const tW = (strings) => {
  return strings
    .map((s) => s.replace(/\s+/g, "\n"))
    .join("")
    .trim();
};

export const CheckPrime = tW`
count=2
number=11
flag=0
যখন(count<number)
{

  যদি(number%count==0){
    flag=flag+1
   
  }


count=count+1


}
যদি(flag==0){
  দেখাও("Prime")
 
}যদি(flag>0){
  দেখাও("Not Prime")
}



`;
