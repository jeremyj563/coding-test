// 2. Balancing Parentheses

function getMin(s) {
    let balance = 0
    let answer = 0
    let length = s.length

    for (let i = 0; i < length; i++) {
        if (s[i]=='(') {
            balance += 1
        } else {
            balance -= 1
        }

        if (balance == -1) {
            answer += 1
            balance += 1
        }
    }
    return (balance + answer)
}

const result = getMin(')))()()()())())())))))())))))))())()))()()()))))))(((')
console.log(result)