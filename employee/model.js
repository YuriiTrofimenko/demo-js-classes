export default class Person {
    static lastId = 0
    constructor (name, age, id) {
        this.name = name
        this.age = age
        if (id) {
            this.id = id
        } else {
            this.id = ++Person.lastId
        }
    }
}