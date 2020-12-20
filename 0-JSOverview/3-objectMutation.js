const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key',
    },
}

const o2 = o //Reference assignment i.e. pointer

o.a = 'new value'
console.log(o2.a)
//new value

o2.a = 'diff value' // updates the same instance
console.log(o2.a)
// diff value

const o3 = Object.assign({}, o) //shallow assignment

o3.obj.key = 'new key'
console.log(o.obj.key)
//new key

const o4 = {...o}
o4.obj.key = 'diff key'
console.log(o.obj.key)
//diff key

function deepCopy (obj) {
    // check if vals are objects
    // if so, copy that object (deep copy)
    // else return the value
    const keys = Object.keys(obj)

    const newObject = {}

    for (let i = 0; i<keys.length; i++) {
        const key = keys[i]
        if(typeof obj[keys[i]] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }

    return newObject
}

const o5 = deepCopy(o)

o.obj.key = 'key'
console.log(o5.obj.key)
// diff key (not updated when o5 is)