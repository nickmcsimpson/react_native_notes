function makeFunctionArray() {
    const arr = []

    // for (var i= 0; i < 5; i++) {
    //     arr.push(function () { console.log(i) })
    // }
    // console.log(i)
    //5

    for (let i = 0; i < 5; i++) {
        arr.push(function () { console.log(i) })
    }
    console.log(i)
    //0

    return arr
}

const functionArr = makeFunctionArray()

// console.log(i) //ReferenceError! not defined

functionArr[0]()
//5