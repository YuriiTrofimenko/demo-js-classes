import Person from '../person.js'
export class Employee extends Person {
    constructor (name, age, salary, id) {
        super(name, age, id)
        this.salary = salary
        this.print = function () {
            console.log('Employee: ', this.id, this.name, this.age, this.salary)
        }
    }
}