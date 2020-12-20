const person = {
    name: 'nick',
    greet: function () { console.log('hello, ' + this.name) },
}

person.greet()
//hello, nick

const greet = person.greet.bind({name: 'this is a bound object'})
person.greet.call({name: 'this is a bound object'})
person.greet.apply({name: 'this is a bound object'})
greet()
//hello undefined
// this.name = 'katara'
// greet()
//note: in NODE it will not be defined

const friend = {
    name: 'john',
}
friend.greet = person.greet
friend.greet()
//hello john


const enemy = {...person}
enemy.name = 'zuko'
enemy.greet()
//hello zuko

const newPerson = {
    name: 'newPerson',
    greet: () => { console.log(this.name) }//binds to global to the time of writing
}

newPerson.greet()

