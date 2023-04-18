const Manager = require('./lib/Manager.cjs');

describe('Manager', () => {
  it('should create an object with a name, id, email, and office number', () => {
    const manager = new Manager('John', 1, 'john@test.com', 101);

    expect(manager.name).toEqual('John');
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual('john@test.com');
    expect(manager.officeNumber).toEqual(101);
  });

  it('should return "Manager" when getRole() is called', () => {
    const manager = new Manager('John', 1, 'john@test.com', 101);

    expect(manager.getRole()).toEqual('Manager');
  });
});