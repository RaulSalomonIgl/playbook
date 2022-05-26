const User = require('./../User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(oUser){
        return Object.values(oUser)
    }

    static updateUserUsername(oUser, newUsername){
        oUser.setUsername = newUsername
    }
}

module.exports = UserService