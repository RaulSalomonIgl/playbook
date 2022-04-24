//Crear un objeto con propiedades diferentes
const LaunchX = {
     mission: "Node JS",
      pet: { 
          name: "Woopa",
           type: "Ajolonauta" 
        } 
    } 
    
console.log(LaunchX)
console.log(`Bienvenido a ${LaunchX.mission}`)
console.log(`${LaunchX["pet"]}`)
console.log(`${LaunchX.pet.type}`)