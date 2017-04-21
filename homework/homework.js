var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
     
     if (n === 0) {
        return 0;
     }
     else if (n===1) {
         return 1;
     } 
     else {
         return (homework.fibonacci(n-1) + homework.fibonacci(n-2));
     }  
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
    
    
    var i = 0;
    var j = 0;
    var temp;
    if (array.length !== undefined) {
       var len = array.length;
       var a2 = array;
       for (i=0; i<len-1; i++) {      
         for (j=i+1; j<len; j++) {
             if (a2[j] < a2[i]) {
                 temp = a2[i];
                 a2[i] = a2[j];
                 a2[j] = temp;
             }     
         }   
       }
    }
    return a2;
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
    var answer = 1;
    for (var i=1; i<=n; i++) {
        answer = answer * i;
    }
    return answer;

};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {

   var len = array.length;
   var temp;
   var i;
   var j;
   for (i=1; i<= n%len; i++){
        temp = array[0]
        for (j=0; j< len-1; j++) {
             array[j] = array[j+1];    
        }
        array[len -1] = temp;
   }
   return array;
};

/*
  5. Balanced Brackets

  A bracket is any one of the following: (, ), {, }, [, or ]

  The following are balanced brackets:
    ()
    ()()
    (())
    ({[]})

  The following are NOT balanced brackets:
  (
  )
  (()
  ([)]

  Return true if balanced
  Return false if not balanced
*/
homework.balancedBrackets = function(bracketsString){
    var len = bracketsString.length;
    var stack = [ ];
    var stacklen= 0;
    var pos = 0;
    while (pos<len) {
        var c = bracketsString[pos]
        if (c === "[" || c === "{"  || c === "(" ) { //push onto stack 
           stack[stacklen] = c;
           stacklen ++;
        }
        else if (c === "]" && stacklen>0) {
                if (stack[stacklen-1] === "[")  {// pop from stack
                    stack[stacklen-1] = "";
                    stacklen = stacklen-1;
                }
                else {
                    return false;
                }    
        } 
        else if (c === "}" && stacklen>0) {
                if (stack[stacklen-1] === "{")  {// pop from stack
                    stack[stacklen-1] = "";
                    stacklen = stacklen-1;
                }
                else {
                    return false;
                }   
        }
        else if (c === ")" && stacklen>0) {
                if (stack[stacklen-1] === "(")  {// pop from stack
                    stack[stacklen-1] = "";
                    stacklen = stacklen-1;
                }
                else {
                    return false;
                }  
        }
        else {
             return  false;
        }  
        pos++; 
    
    }
    
    return (stacklen === 0 );
};
