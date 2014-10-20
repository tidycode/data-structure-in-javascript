function factorial(num){
var s=new Stack();
var p=1;
while(num>0){
s.push(num--);
}
while(s.length()>0){
p=p*s.pop();
}
return p;
}