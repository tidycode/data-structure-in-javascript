/**
 * 判断字符串是否是回文
 * @param  {[type]}  str [description]
 * @return {Boolean}     [description]
 */
function isPalinedrome(str) {
	var oldStr = str.split("");
	var len = oldStr.length;
	var newStr = "";
	var s = new stack();
	var i = 0;
	for (; i < len; ++i) {
		s.push(oldStr[i]);
	};
	while (s.length() > 0) {
		newStr += s.pop();
	}
	return newStr === str?true:false;
}