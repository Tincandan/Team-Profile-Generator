const Employee = require("../lib/Employee");

test("Can make Employee instance", () => {
    const e = new Employee();
    expect(typeof e).toEqual("object");
});

test("Can set name via constructor arguments", () => {
  const name = "False Name";
  const e = new Employee(name);
  expect(e.name).toEqual(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Dummy Name", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Dummy Name", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "False Name";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Dummy Name", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Dummy Name", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("False Name", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
