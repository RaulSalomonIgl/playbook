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


const post = {
    user: "Raul Salomon",
    date: "7 de enero",
    post:{
        privacy: "Public",
        description: "¡Feliz día, hoy lunes 13 de septiembre se festeja el día del programador 🥳!",
        file: null,
        tagPerson: [],
        location: null,
        'q&a':[],
        importantEvent: null,
        gif: null,
        live: null,
    },
    reactions: [
        ["ME GUSTA",13],
        ["ME ENCANTA",58],
        ["ME IMPORTA",1],
        ["ME DIVIERTE",0],
        ["ME ASOMBRA",0],
        ["ME ENTISTECE",0],
        ["ME ENOJA",0]
    ],
    comments: [
        [
            "Raul Salomon",
            "Felicidades!!!",
            [
                ["ME GUSTA",1],
                ["ME ENCANTA",10],
                ["ME IMPORTA",3],
                ["ME DIVIERTE",0],
                ["ME ASOMBRA",0],
                ["ME ENTISTECE",0],
                ["ME ENOJA",0]
            ]
        ]
    ],
    shared: 25,
    getTotalReactions: function(){
        return this.reactions.reduce((acc, element) => acc + element[1], 0)
    },
    getComments: function(){
        this.comments.forEach(comment =>
                console.log(`${comment[0]}
                 \n${comment[1]}\n${comment[2].reduce((acc, element) => acc + element[1], 0)} reacciones\n
                `)
            )
    },
    getPost: function(){
        console.log(`${this.user}   ${this.date}\n${this.post.description}\n${this.getTotalReactions()} reacciones     ${this.comments.length} comentarios\n`)
        return this.getComments()
    }
}

console.log("Reacciones: " + post.getTotalReactions())
post.getComments()
console.log()
post.getPost()