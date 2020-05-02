/**
 * Singleton Pattern
 */

const mySingleton = (function() {
    let instance = null;
     
    function Singleton() {
   
        const privateVariable = 'I am private';

        function privateMethod() {
            console.log('I am also private');
        }

        const privateRandomNumber = Math.random();

        return {

            publicMethod: function() {
                console.log('I am Public')
            },

            publicProperty: 'I am also public',

            randomNumber: function() {
                return privateRandomNumber;
            }
        };
    }

    return {

        getInstance: function() {
            if(!instance) {
                instance = Singleton();
            }
            return instance;
        }

    }
})();


const s1 = mySingleton.getInstance();
console.log(s1.randomNumber(), 'random no. s1');
const s2 = mySingleton.getInstance();
console.log(s2.randomNumber(), 'random no. s2');
