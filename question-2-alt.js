// 2. Balancing Parentheses

function getMin(s) {
    let count = 0
    let arr = []
    
    for (const char of s) {
        if (char === '(') {
            arr.push(')')
        } else {
            arr.length ? arr.pop() : count++
        }
    }
    return (count + arr.length)
}

const result = getMin(')))()()()())())())))))())))))))())()))()()()))))))(((')
console.log(result)