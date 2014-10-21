/**
 * split string into array
 * Example: "1+2"->arr[0]=1;arr[1]="+";arr[1]=2
 * @param  {string} exp expression
 * @return {array}     array
 */
function splitExp(exp) {
	var tmpArr = exp.split("");
	var len = tmpArr.length;
	var i = 0;
	var reg = /[\d.]/;
	var tmpNum = "";
	var rsArr = [];
	for (; i < len; i++) {
		if (reg.test(tmpArr[i])) {
			tmpNum = tmpNum + "" + tmpArr[i];
			if (i === len - 1) {
				rsArr.push(tmpNum); //if the last element is number,push
			}
		} else {
			if (tmpNum !== "") {
				rsArr.push(tmpNum); 
			}
			tmpNum = tmpArr[i];
			rsArr.push(tmpNum); 
			tmpNum = "";
		}

	};
	return rsArr;
}

/**
 * In satck priority
 * in stack,every operator priority increase one expect brackets.
 * if isp > icp ,then pop stack
 * @param  {string} oper operator
 * @return {integer}      In satck priority
 */
function isp(oper){
	var priority={
		"#":0,
		"^":7,
		"+":3,
		"-":3,
		"*":5,
		"/":5,
		"%":5,
		"(":1,
		")":8
	};
	return priority[oper];
}
/**
 * In comming priority
 * if isp > icp ,then pop stack
 * @param  {string} oper operator
 * @return {integer}      In comming priority
 */
function icp(oper){
	var priority={
		"#":0,
		"^":6,
		"+":2,
		"-":2,
		"*":4,
		"/":4,
		"%":4,
		"(":8,
		")":1
	};
	return priority[oper];
}

/**
 * calculate postfix
 * @param  {string} exp postfix expresion
 * @return {integer}     result
 */
function calculatePostfix(exp) {
	var str = InfixToPostfix(exp);
	str = str.substring(0, str.length-1);
	var tmpArr = str.split(",");
	var st = new Stack();
	var len = tmpArr.length;
	var i = 0;
	var curInput = null;
	var pop1 = 0;
	var pop2 = 0;
	var rs = 0;
	for (; i < len; i++) {
		curInput = tmpArr[i];
		if (/\d/.test(curInput)) {
			st.push(curInput);
		} else {
			pop1 = +st.pop();
			pop2 = +st.pop();
			switch (curInput) {
				case "+":
					rs = pop2 + pop1;
					break;
				case "-":
					rs = pop2 - pop1;
					break;
				case "*":
					rs = pop2 * pop1;
					break;
				case "/":
					rs = pop2 / pop1;
					break;
				default:
					break;
			}
			st.push(rs);
		};
	};
	return rs;
}

/**
 * transfer infix to postfix
 * @param  {string} exp infix expression
 * @return {string}     postfix expression
 */
function InfixToPostfix(exp) {
	var expArr = splitExp(exp);
	expArr.push("#"); //# the end flag of stack
	var st = new Stack();
	var outputStr = ""; 
	var i = 0;
	var len = expArr.length;
	var curInput = null; //current character
	var curPeek = null; //top element of stack
	var priCompare = null; //isp compare icp
	for (; i < len; i++) {
		if (expArr[i] === "#") { //the end
			while (st.length() > 0) {
				outputStr = outputStr + "" + st.pop()+ ",";
			}
			break;
		};
		curInput = expArr[i];
		if (/\d/.test(curInput)) {
			outputStr = outputStr + "" + curInput+ ",";
			continue;
		}
		while (st.length() >= 0) {
			if (st.isEmpty() === true) {
				st.push(curInput);
				break;
			}
			curPeek = st.peek();
			priCompare = (isp(curPeek)- icp(curInput));
			if (priCompare >0) { // if isp greater tha icp,then pop 
				outputStr = outputStr + "" + st.pop()+ ",";
				continue;
			} else if (priCompare <0) {
				st.push(curInput);
				break;
			} else if (priCompare === 0 && (curPeek === "(" && curInput === ")")) {
				st.pop();
				break;
			} else {
				//TODO invalid expression, throw error.
			}
		}
	};
	return outputStr;
}