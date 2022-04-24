//Crear un objeto con métodos
const Ajolonauta = {
    name: "Woopa",
    mission: "Node JS",
    SayHello: function SayHello() {
        console.log(`Hola, mi nombre es ${this.name}!!!`)
    }
}

console.log(Ajolonauta)
Ajolonauta.SayHello()