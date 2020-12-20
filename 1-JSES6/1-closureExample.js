function makeHelloFunction() {
    const message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
}

const sayHello = makeHelloFunction()
// console.log(message) Error! not defined
console.log(sayHello.toString())
//prints function definition

sayHello()
//Hello!