/**
 * Given an array in which there are arrays that are of length two,
 * the first index of that array has the student name and the second index has the marks scored.
 * Find the maximum average scored by any student.
 * The array can have multiple subjects of marks for a particular student.
 */
    
 function calculateAvg(arr) {
    const obj = {};
    arr.forEach(item => {
        const [name, marks] = item;
        if(!obj[name]) {
            obj[name] = [];
        }
        obj[name].push(marks);
    });

    let maxAvg = Number.MIN_SAFE_INTEGER;
    let student = null;
    for(let [key, value] of Object.entries(obj)) {
        const avg = value.reduce((acc, val) => {
            return acc + val;
        }, 0) / value.length;
        
        if(avg > maxAvg) {
            maxAvg = avg;
            student = key;
        };
    } 

    return { maxAvg, student }
 }

 const result = calculateAvg([
     ['John', 30],
     ['Will', 20],
     ['Snow', 40],
     ['Drake', 60],
     ['John', 80],
 ]);

 console.log(result);