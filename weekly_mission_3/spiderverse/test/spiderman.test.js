const Spiderman = require('./../app/Spiderman')

describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      //Instanciando Class Spiderman
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony" )

      //Validamos que el codigo funcione de la manera esperada
      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.movies).toBe(2)
      expect(andrewGarfield.studio).toBe("Sony")
    });
  })