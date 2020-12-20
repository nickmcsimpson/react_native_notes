const sayHello = (function () {
    const message = 'Hello!'

    function sayHello() {
        console.log(message)
    }

    return sayHello
})()

// console.log('typeof message: ', typeof message)
//undefined
// console.log(sayHello.toString())
//function definitiion
// sayHello()
//Hello!

const counter = (function() {
    let count = 0

    return {
        inc: function() { count = count + 1},
        get: function() { console.log(count) },
    }
})()

counter.get()
//0
counter.inc()
counter.get()
//1
