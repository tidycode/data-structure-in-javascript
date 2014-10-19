/**
 * 判断字符串是否是回文
 * @param  {string}  str 判断的字符串
 * @return {Boolean}     true or false
 */
function isPalinedrome(str) {
	var oldStr = str.split(""),
		len = oldStr.length,
		newStr = "",
		s = new Stack(),
		i = 0;
	for (; i < len; ++i) {
		s.push(oldStr[i]);
	};
	while (s.length() > 0) {
		newStr += s.pop();
	}
	return newStr === str ? true : false;
}