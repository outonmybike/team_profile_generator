const Employee = require('../lib/Employee.js');

const [nombre1, id1, email1] = ['Jeff','007','jeff@juno.com']

test('creates a new employee', () => {
    const employee = new Employee(nombre1, id1, email1);

    expect(employee.nombre).toBe('Jeff');
    expect(employee.id).toBe('007');
    expect(employee.email).toBe('jeff@juno.com');
    expect(employee.role).toBe('Employee');

});

test('check the getName function', () => {
    const employee = new Employee(nombre1, id1, email1);

    expect(employee.getName()).toEqual(expect.stringContaining(nombre1))
})

test('check the getId function', () => {
    const employee = new Employee(nombre1, id1, email1);

    expect(employee.getId()).toEqual(expect.stringContaining(id1))
})

test('check the getEmail function', () => {
    const employee = new Employee(nombre1, id1, email1);

    expect(employee.getEmail()).toEqual(expect.stringContaining(email1))
})