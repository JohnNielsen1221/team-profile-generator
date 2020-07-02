const Employee = require('../lib/Employee');

test('Creates Employee object', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object');
});

test('Set name', () => {
    const name = 'John';
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test('Set ID', () => {
    const testValue = 100;
    const employee = new Employee('Foo', testValue);
    expect(employee.id).toBe(testValue);
});

test('Set Email', () => {
    const testValue = 'test@test.com';
    const employee = new Employee('Foo', 1, testValue);
    expect(employee.email).toBe(testValue);
});

test('Gets name', () => {
    const testValue = 'John';
    const employee = new Employee(testValue);
    expect(employee.getName()).toBe(testValue);
});

test('Gets ID', () => {
    const testValue = 100;
    const employee = new Employee('Foo', testValue);
    expect(employee.getId()).toBe(testValue);
});

test('Gets Email', () => {
    const testValue = 'test@test.com';
    const employee = new Employee('Foo', 1, testValue);
    expect(employee.getEmail()).toBe(testValue);
});

test('Gets Role', () => {
    const testValue = 'Employee';
    const employee = new Employee('John', 1, 'test@test.com');
    expect(employee.getRole()).toBe(testValue);
});