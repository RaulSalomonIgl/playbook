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

    static getAllUsernames(listUsers){
        const listUsername = []

        listUsers.forEach( (element) => { //Recorrer lista de usuerios
            listUsername.push(element.username)
        });
        return listUsername
    }
}

module.exports = UserService