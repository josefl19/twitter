const User = require('../../app/models/User');

describe("Unit test for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "josefl19", "Jose Fujarte", "Bio", "dateCreated", "lastUpdate");

        expected(user.id).toBe(1);
        expected(user.username).toBe("josefl19");
        expected(user.name).toBe("Jose Fujarte");
        expected(user.bio).toBe("Bio");
        expected(user.dateCreated).toBe("dateCreated");
        expected(user.lastUpdate).toBe("lastUpdate");
    });
})