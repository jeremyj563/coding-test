// 2. Balancing Parentheses

// function getMin(s) {
//     const numOpen = s.split('(').length - 1
//     const numClosed = s.split(')').length - 1
//     const min = Math.abs(numOpen - numClosed)
//     return min
// }

function getMin(s) {
    let balance = 0
    let answer = 0

    for (let i=0; i<s.length; i++) {
        if (s[i]=='(') {
            balance += 1
        } else {
            balance -= 1
        }

        if (balance == -1) {
            answer += 1
            balance += 1
        }

        return balance + answer
    }
}

getMin('(()))')