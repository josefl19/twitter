const User = require('../../app/models/User');

describe("Unit test for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "josefl19", "Jose Fujarte", "Bio");

        expect(user.id).toBe(1);
        expect(user.username).toBe("josefl19");
        expect(user.name).toBe("Jose Fujarte");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdate).not.toBeUndefined();
    });
})