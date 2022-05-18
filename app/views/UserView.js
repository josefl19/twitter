const UserService = require('./../services/UserService');

class UserView {
    static createUser(payload) {
        const nameKeys = ['username', 'name', 'id']

        if(payload === null) {
            return {error: 'payload no existe'};
        } else if (Object.values(payload).some((p) => p === null)) {
            return {error: 'necesitan tener un valor valido'};
        } else if (Object.keys(payload).every((e) => nameKeys.includes(e))) {
            return {error: 'necesitan tener un valor valido'};
        } else {
            return UserService.create(payload.id, payload.username, payload.name);
        }
    }
}

module.exports = UserView