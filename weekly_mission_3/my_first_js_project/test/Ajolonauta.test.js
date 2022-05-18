const Ajolonauta = require('./../app/Ajolonauta')

describe("Prueba de unidad de Ajolonauta",() => {
    test('Caso de prueba 1: Creación de objeto', () => {
        // Aquí se puede usar el codigo de cualquier manera deseada
        const woopa = new Ajolonauta("Woopa")

        // Validar el resultado esperado
        expect(woopa.name).toBe("Woopa");
    })
})