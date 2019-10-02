const checkBalance = (str) => {
    let map = {
        '{': '}',
        '[': ']',
        '(': ')',
        '<': '>'
    }

    const stack = new Stack()

    for (let i = 0; i < str.length; i++) {
        if(str[i] in map) stack.push(str[i])
        else {
            if(!str[i].match(/[a-z]|[A-Z]/i)) {
                const match = stack.pop()
                if(str[i] !== map[match]) return false
            }
        }
    }

    if(!stack.isEmpty()) return false

    return true
}

class Stack{
    constructor(){
        this.items = []
    }

    push(data){
        this.items.push(data)
    }

    pop(){
        return this.items.pop()
    }

    isEmpty(){
        return this.items.length === 0
    }
}

const test0 = "{[(<>)]}"
const test1 = "{[(>)]}"
const test2 = "{}[]()<>"
const test3 = '{[]()<>lkajlksdjfKakdsf[]([{hola}])}'
const test4 = "{[(<a)]}";
const test5 = ''

console.log(checkBalance(test0))
console.log(checkBalance(test1))
console.log(checkBalance(test2))
console.log(checkBalance(test3))
console.log(checkBalance(test4))
console.log(checkBalance(test5))
