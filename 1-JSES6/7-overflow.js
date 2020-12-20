function recurse() {
    console.log('recursion!')
    return recurse()
}

recurse()//RangeError! Maximum Stack exceeded