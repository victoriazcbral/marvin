function fizzbuzz(num1, num2){
    var a = num1
    while (a <= num2){
    if (a % 3 === 0 && a % 5 === 0){
        console.log (a + " FizzBuzz ")
        a++
    }
    if (a % 5 === 0){
        console.log (a + " Buzz ")
        a++
    }
         if (a % 3 === 0){
        console.log (a + " Fizz ")
        a++
}

console.log(a)
a++

}
}
