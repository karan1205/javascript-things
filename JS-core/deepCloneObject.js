/**
 * Deep Clone Object
 */

 function deepclone(obj) {
     const clone = {};
     for(let key in obj) {
         if(obj.hasOwnProperty(key)) {
             if(obj[key] !== null && typeof obj[key] === 'object') {
                 clone[key] = deepclone(obj[key]);
             } else {
                 clone[key] = obj[key];
             }
         }
     }
     return clone;
 }