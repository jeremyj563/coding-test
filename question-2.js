// 2. Balancing Parentheses

function getMin(s) {
    const numOpen = s.split('(').length - 1
    const numClosed = s.split(')').length - 1
    const min = Math.abs(numOpen - numClosed)
    return min
}

getMin('(()))')