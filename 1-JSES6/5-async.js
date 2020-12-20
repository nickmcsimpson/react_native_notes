function printOne() {
    console.log('one')
}

function printThree() {
    console.log('three')
}

function printTwo() {
    console.log('two')
}

setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()
//backwards