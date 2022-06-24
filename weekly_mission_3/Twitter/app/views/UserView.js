const User = require('../services/UserService')

class UserView{
    static createUser(payload){
        if(payload === null){
            return {error: "payload no existe"}

        }else if(payload.username === null || payload.id === null || payload.name === null){
            return {error: "necesitan tener un valor válido"}

        }else if(
        (typeof payload.username !== 'string' || payload.username === null) ||
        (typeof payload.name !== 'string' || payload.name === null) ||
        (typeof payload.id !== 'number' || payload.id === null)){
            return {error: "necesitan tener un valor válido"}

        }   
        else{
            return User.create(payload.id, payload.username, payload.name)
        }
    }
}

module.exports = UserView