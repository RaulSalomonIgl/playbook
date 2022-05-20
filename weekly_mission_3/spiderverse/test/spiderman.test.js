const Spiderman = require('./../app/Spiderman')

describe("Test Suite Dummy Description", () => {
    test('Case 1 Create an spiderman object', () => {
      //Instanciando Class Spiderman
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

      //Validamos que el codigo funcione de la manera esperada
      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.movies).toBe(2)
      expect(andrewGarfield.studio).toBe("Sony")
    });
    test('Case 2 Use the method getInfo', () => {
      const tomHoland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel")
      expect(tomHoland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    });
  })