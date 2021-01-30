class Employee {
    constructor(nombre = '', id, email) {
        this.nombre = nombre;
        this.id = id;
        this.email = email;
        this.role = 'Employee'
    }
    getName() {
        return this.nombre
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }}

module.exports = Employee

