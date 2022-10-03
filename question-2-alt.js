// 2. Balancing Parentheses

function getMin(s) {
    let inserted = 0
    let arr = []
    
    for (const char of s) {
        if (char === '(') {
            arr.push('(')
        } else {
            if (arr.length > 0) {
                arr.pop()
            } else {
                inserted++
            }
        }
    }
    return (inserted + arr.length)
}

const result = getMin(')))()()()())())())))))())))))))())()))()()()))))))(((')
console.log(result)