/**
 * Suppose we are given a string “aaabbbbbccccdaa”, then we to print “a3b5c4d1a2”.
 */

 function convert(str) {
     let result = '';
     let char = ''; 
     let count = 0;

     for(let i=0; i<str.length; i++) {
         if(char === str[i]) {
             count++;
         } else {
             if(char && count) {
                result += `${char}${count}`;
             }
             char = str[i];
             count = 1;
         }
     }
     if(char && count) {
        result += `${char}${count}`;
     }
     return result;
 }

const result = convert('aaabbbbbccccdaa');
console.log(result);