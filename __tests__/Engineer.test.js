const Engineer = require('../lib/Engineer');

test('Sets GitHub account name', () => {
  const testValue = 'GitHubUsername';
  const employee = new Engineer('Foo', 1, 'test@test.com', testValue);
  expect(employee.github).toBe(testValue);
});

test('getRole() returns "Engineer"', () => {
  const testValue = 'Engineer';
  const employee = new Engineer('Foo', 1, 'test@test.com', 'GitHubUser');
  expect(employee.getRole()).toBe(testValue);
});

test('Gets GitHub account name', () => {
  const testValue = 'GitHubUsername';
  const employee = new Engineer('Foo', 1, 'test@test.com', testValue);
  expect(employee.getGithub()).toBe(testValue);
});