const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('getSchool', () => {
    it('should return the school of the intern', () => {
      const intern = new Intern('John', 123, 'john@test.com', 'UCLA');
      expect(intern.getSchool()).toEqual('UCLA');
    });
  });

  describe('getRole', () => {
    it('should return "Intern"', () => {
      const intern = new Intern('John', 123, 'john@test.com', 'UCLA');
      expect(intern.getRole()).toEqual('Intern');
    });
  });
});