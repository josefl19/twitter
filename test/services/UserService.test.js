const UserService = require('../../app/services/UserService');

describe("Pruebas para la clase UserService", () => {
    test("Create a user with method static", () => {
        const user = UserService.create(1, "josefl", "Jose Fujarte");

        expect(user.id).toBe(1);
        expect(user.username).toBe("josefl");
        expect(user.name).toBe("Jose Fujarte");
        expect(user.bio).not.toBeUndefined();
    });
});
