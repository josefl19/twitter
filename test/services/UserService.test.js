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
    
    test("Req 4) Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "josefl1", "Jose Fujarte");
        const user2 = UserService.create(2, "josefl2", "Jose Fujarte");
        const user3 = UserService.create(3, "josefl3", "Jose Fujarte");
        const usernames = UserService.getAllUsernames([user1, user2, user3]);

        expect(usernames).toContain("josefl1")
        expect(usernames).toContain("josefl2")
        expect(usernames).toContain("josefl3")

    });
});
