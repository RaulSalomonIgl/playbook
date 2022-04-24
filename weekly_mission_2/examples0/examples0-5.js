//Crear un objeto que reciba parámetros
const LaunchX = {
    Mission: "Node JS",
    Welcome: function Welcome(explorer) {
        console.log(`${explorer}, bienvenido a la misión ${this.Mission}`)
    }
}

console.log(LaunchX)
LaunchX.Welcome("Raul")