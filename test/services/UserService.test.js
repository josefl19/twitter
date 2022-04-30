const UserService = require('../../app/services/UserService');

describe("Pruebas para la clase UserService", () => {
    test("Req 1) Create a user with method static", () => {
        const user = UserService.create(1, "josefl", "Jose Fujarte");

        expect(user.id).toBe(1);
        expect(user.username).toBe("josefl");
        expect(user.name).toBe("Jose Fujarte");
        expect(user.bio).not.toBeUndefined();
    });

    test("Req 2) Static method getInfo to return a list of values from an object", () => {
        const user = UserService.create(1, "josefl", "Jose Fujarte");
        const userInfoList = UserService.getInfo(user);
        
        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe("josefl");
        expect(userInfoList[2]).toBe("Jose Fujarte");
        expect(userInfoList[3]).toBe("Sin bio");       
    });
    
    test("Req 3) Update username", () => {
        const user = UserService.create(1, "josefl", "Jose Fujarte");
        UserService.updateUserUsername(user, "josef");
        expect(user.username).toBe("josef");
    });
});
