// 2. Balancing Parentheses

function getMin(s) {
    let minInserted = 0
    let stack = []
    
    for (const char of s) {
        if (char === '(') {
            stack.push('(')
        } else {
            if (stack.length > 0) {
                stack.shift()
            } else {
                minInserted++
            }
        }
    }
    return (minInserted + stack.length)
}

const result = getMin(')))()()()())())())))))())))))))())()))()()()))))))(((')
console.log(result)