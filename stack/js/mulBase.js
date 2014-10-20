/**
 * 进制转换(进制基数为2-9)
 * @param  {integer} num    待转换数字
 * @param  {integer} toBase 进制
 * @return {integer}        转换后的数字
 */
function mulBase(num,toBase){
	var s=new Stack();
	var tmp=[];
	var	str="";
	do{
		s.push(num % toBase);
		num=Math.floor(num/toBase);
	}while( num >0 );

	while(s.length()>0){
		str+=s.pop();
	}
	return str;
}