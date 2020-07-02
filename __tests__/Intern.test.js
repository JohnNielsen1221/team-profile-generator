const Intern = require('../lib/Intern');

test('Sets school', () => {
  const testValue = 'U of U';
  const employee = new Intern('Foo', 1, 'test@test.com', testValue);
  expect(employee.school).toBe(testValue);
});

test('getRole() returns "Intern"', () => {
  const testValue = 'Intern';
  const employee = new Intern('Foo', 1, 'test@test.com', 'U of U');
  expect(employee.getRole()).toBe(testValue);
});

test('Gets School', () => {
  const testValue = 'U of U';
  const employee = new Intern('Foo', 1, 'test@test.com', testValue);
  expect(employee.getSchool()).toBe(testValue);
});