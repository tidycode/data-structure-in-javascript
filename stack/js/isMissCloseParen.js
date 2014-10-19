/**
 * 判断给定的字符串是否缺少右括号
 * @param  {string}  exp 给定的字符串
 * @return {Boolean} true or false
 */
function isMissCloseParen(exp) {
	var s = new Stack(),
		tmpArr = exp.split(""),
		len = tmpArr.length,
		tmp = "",
		str = "",
		i = 0,
		isMissed = false;
	for (; i < tmpArr.length; i++) {
		tmp = tmpArr[i];
		if (tmp === "(") {
			s.push(tmp);
			continue;
		}
		if (tmp === ")") {
			if (s.length() === 0) {
				isMissed = true;
				break;
			} else {
				s.pop();
				continue;
			}
		}
	};
	if (s.length() > 0) { //there are still left paren in the stack
		isMissed = true;
	}
	return isMissed;
}