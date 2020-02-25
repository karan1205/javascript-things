/**
 * Check whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in given exp
 */

const { Stack } = require('../');

function checkBalancedSymbols(exp) {
    const stack = new Stack();
    for(let char of exp) {
        if(['[', '{', '('].indexOf(char) > -1) {
            stack.push(char);
            continue;
        }

        switch(char) {
            case ']': {
                const { value: top } = stack.top();
                if(top === '(' || top === '{') {
                    return false;
                }
                break;
            }
            case '}': {
                const { value: top } = stack.pop();
                if(top === '(' || top === ']') {
                    return false;
                }
                break;
            }
            case ')': {
                const { value: top } = stack.pop();
                if(top === '[' || top === '{') {
                    return false;
                }
                break; 
            }   
        }
        return true;
    }
}

console.log(checkBalancedSymbols("[(])"))
console.log(checkBalancedSymbols("[()]{}{[()()]()}"));