// 2. Balancing Parentheses

function getMin(s) {
    let balance = 0
    let count = 0

    for (const char of s) {
        if (char === '(') {
            balance++
        } else {
            balance ? balance-- : count++
        }
    }
    return (balance + count)
}

const result = getMin(')))()()()())())())))))())))))))())()))()()()))))))(((')
console.log(result)