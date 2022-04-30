class UserView {
    static createUser(payload) {
        if(payload === null) {
            return {error: 'payload no existe'};
        } else if (Object.values(payload).some((p) => p === null)) {
            return {error: 'necesitan tener un valor valido'};
        }
    }
}

module.exports = UserView