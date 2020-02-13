function fizzbuzz(num1, num2){
    var a = num1
    while (a <= num2){
        if ( a % 3 === 0 && a  % 5 === 0){
            console.log (a + " FizzBuzz ")
         
        }
        if (a % 5 === 0){
            console.log(a + " Buzz ")
       
        }
        if (a % 3 === 0){
            console.log(a + " Fizz ")
       
        }
        
        if ( a % 3 != 0 && a  % 5 != 0){
            console.log (a)
       
    }
     a++
    }  
}

