const o = new Object()

o.firstName = "Nick"
o.lastName = 'Simpson'
o.isLearning = true
o.greet = function() {
    console.log('hi!')
}

const o2 = {}
o.firstName = 'Nick'
o['lastName'] = 'Simpson'
const key = "isLearning"
o[key] = true
o['greet'] = function() {
    console.log('hi!')
}

const o3 = {
    1: 'test',
    firstName: 'Nick',
    lastname: 'Simpson',
    isLearning: true,
    greet: function() {
        console.log('hi!')
    },
    address: {
        street: '30th St',
        number: 1108
    },
}

console.log(o3.address['number'])

// console.log(o3.1) Doesn't work
console.log(o3[1])
