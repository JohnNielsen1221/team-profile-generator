const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('Sets Office Number', () => {
    const testValue = 100;
    const employee = new Manager('foo', 1, 'test@test.com', testValue);
    expect(employee.officeNumber).toBe(testValue);
});

test('getRole returns "Manager"', () => {
    const testValue = 'Manager';
    const employee = new Manager('Foo', 1, 'test@test. com', 100);
    expect(employee.getRole()).toBe(testValue);
});

test('Get Office Number', () => {
    const testValue = 100;
    const employee = new Manager('Foo', 1, 'test@test.com', testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
});