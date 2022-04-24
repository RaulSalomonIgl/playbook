//Crear un objeto que reciba parámetros
class LaunchX{
    constructor(Explorer, Mission, Pet){
        this.Explorer = Explorer
        this.Mission = Mission
        this.Pet = Pet
    }

    Welcome(){
        console.log(`${this.Explorer}, bienvenido a la misión ${this.Mission}`)
    }
    
    Woopa(){
        console.log(`Hola ${this.Explorer}, yo soy ${this.Pet}!!!`)
    }
}


console.log(LaunchX)

const launchX = new LaunchX('Raúl','Node JS','Woopa')
launchX.Welcome()
launchX.Woopa()