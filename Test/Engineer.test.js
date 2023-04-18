const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  describe('getGithub', () => {
    it('should return the GitHub username', () => {
      const github = 'testUser';
      const engineer = new Engineer('Foo', 1, 'test@test.com', github);

      expect(engineer.getGithub()).toEqual(github);
    });
  });

  describe('getRole', () => {
    it('should return "Engineer"', () => {
      const engineer = new Engineer('Foo', 1, 'test@test.com', 'testUser');

      expect(engineer.getRole()).toEqual('Engineer');
    });
  });
});