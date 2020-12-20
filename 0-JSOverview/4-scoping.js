// console.log(thisIsAConst); //error!
// console.log(thisIsALet); //error!
console.log(thisIsAVar) //works through hoisting

thisIsHoisted();
// thisIsNotHoisted(); //ReferenceError! doesn't exist
// thisIsAlsoNotHoisted(); //TypeError! undefined

thisIsAlsoAVariable = 50 //Global variable not necessarily used
const thisIsAConst = 50

// thisIsAConst++ TypeError updating constant
let thisIsALet = 50
thisIsALet++ // works because let is not a constant
// let thisIsALet = 51 //error! alreayd instantiated

const constObj = {}

constObj.a = 'a'


var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = 'new value' //over shadows old variable


function thisIsHoisted() {
    console.log('This is a function declared at the bottom of the file!')
}

// Could be let or const still won't work
const thisIsNotHoisted = function() {
    console.log('This will not be hoisted')
}

var thisIsAlsoNotHoisted = function() {
    console.log('This will not be hoisted')
}