// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
const isValid = function(s: string) {
    const stack: string[] = []

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char)
        } else {
            const last = stack[stack.length - 1]
            const shouldPop = (char === ')' && last === '(') || (char === '}' && last === '}') || 
            (char === ']' && last === '[')
            if (shouldPop) {
                stack.pop()
            } else {
                return false
            }
        }
    }


    return stack.length === 0
};