# 2. Balancing Parentheses

def getMin(s):
    balance = 0
    answer = 0
    length = len(s)

    for i in range(0, length):
        if (s[i] == '('):
            balance += 1
        else:
            balance += -1
        
        if (balance == -1):
            answer += 1
            balance += 1
    return (balance + answer)

result = getMin(')))()()()())())())))))())))))))())()))()()()))))))(((')
print(result)
