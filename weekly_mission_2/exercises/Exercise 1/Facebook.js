const user = {
    name: "Raul Salomon",
    nickname: "",
    gender: "Hombre",
    dateOfBirth: "11 de septiembre",
    yearOfBirth: 2001,
    interests: "Mujeres",
    getDateOfBirth: function(){
        return `${this.dateOfBirth}, ${this.yearOfBirth}`
    },
    getProfile:function(){
        console.log(`${this.name}(${this.nickname})\nSexo: ${this.gender}\nCumpleaños: ${this.dateOfBirth}\nInteres: ${this.interests}`)
    }
}

console.log("User")
console.log("Nombre: " + user.name)
console.log(`Fecha de nacimiento: ${user.getDateOfBirth()}\n`)
user.getProfile()