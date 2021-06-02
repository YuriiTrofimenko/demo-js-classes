const P = class Person {
    static lastId = 0
    constructor (name, age, id) {
        this.name = name
        this.age = age
        if (id) {
            this.id = id
        } else {
            this.id = ++Person.lastId
        }
        this.print = function () {
            console.log('Person: ', this.id, this.name, this.age)
        }
    }
}
export default P