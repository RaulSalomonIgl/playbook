const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   //Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log("\nImprime el nombre de cada explorer en la lista")
explorers.forEach(explorer => console.log(explorer.name))

   //Imprime el stack de cada explorer, usa FOR EACH
console.log("\nImprime el stack de cada explorer")
explorers.forEach(explorer => console.log(`${explorer.name}: ${explorer.stack}`))
   
   //Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log("\nCrea una nueva lista con las listas de stacks de cada explorer")
const lstStacks = explorers.map((stack) => {return stack.stack})
console.log(lstStacks)
   
   //Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log("\nObtén la lista de explorers que tengan en su stack 'js'")
const lstJsInStacks = explorers.filter((stack) => stack.stack.includes('js'))
console.log(lstJsInStacks)
   
   //Busca el primer explorer que sea de la CDMX, usa FIND   
console.log("\nBusca el primer explorer que sea de la CDMX")
const explorerCDMX = explorers.find((explorer) => explorer.city === "CDMX")
console.log(explorerCDMX)
   
   //Obtén la suma de todos los exercises_completed, usa REDUCE
console.log("\nSuma de todos los exercises_completed: "+ explorers.reduce((acc, element) => acc + element.exercises_completed, 0))
   
   //Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("\nObtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true")

if( explorers.some( (explorer) => explorer.missions.frontend.exercisesFinished === true ) ){
  console.log("Por lo menos un explorer tiene la propiedad 'exercisesFinished' en frontend como true")
} else{
  console.log("Ningun explorer cumple con la validación")
}  
   
   //Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log("\nObtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true")

if( explorers.every((explorer) => explorer.missions.onboarding.isFinished === true) ){
  console.log("Todos los explores finalizaron el Onboarding")
} else{
  console.log("NO todos los explores finalizaron el Onboarding")
}  