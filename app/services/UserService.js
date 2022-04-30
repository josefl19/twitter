const User = require('./../models/User');

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Sin bio");
    }

    static getInfo(User) {
        return [User.id, User.username, User.name, User.bio];
    }

    static updateUserUsername(User, newUsername) {
        User.username = newUsername;
    }

    static getAllUsernames(users) {
        let listUsernames = [];
        users.forEach(u => {
            listUsernames.push(u.username);
        });

        return listUsernames;
    }
}

module.exports = UserService