import PersonModel from './person.js'
import {Employee as EmployeeModel} from './employee/index.js'

const p1 = new PersonModel('Bill Gates', 65)
const p2 = new PersonModel('John Connor', 25)
const p1Copy = new PersonModel(p1.name, p1.age, p1.id)
// console.log(p1, p2, p1Copy)

// import {Employee as EmployeeModel} from './employee'

const e1 = new EmployeeModel('Sarah Connor', 40, 10000)
// console.log(e1)

const models = [p1, p2, e1]
models.forEach(model => {
    model.print()
})
