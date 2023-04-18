const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Initialization', () => {
    it('should create an object with a name, id, and email if provided with valid arguments', () => {
      const employee = new Employee('Alice', 1, 'alice@test.com');

      expect(employee.name).toEqual('Alice');
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual('alice@test.com');
    });
  });

  describe('getName', () => {
    it('should return the name of the employee', () => {
      const employee = new Employee('Alice', 1, 'alice@test.com');

      expect(employee.getName()).toEqual('Alice');
    });
  });

  describe('getId', () => {
    it('should return the id of the employee', () => {
      const employee = new Employee('Alice', 1, 'alice@test.com');

      expect(employee.getId()).toEqual(1);
    });
  });

  describe('getEmail', () => {
    it('should return the email of the employee', () => {
      const employee = new Employee('Alice', 1, 'alice@test.com');

      expect(employee.getEmail()).toEqual('alice@test.com');
    });
  });

  describe('getRole', () => {
    it("should return 'Employee'", () => {
      const employee = new Employee('Alice', 1, 'alice@test.com');

      expect(employee.getRole()).toEqual('Employee');
    });
  });
});