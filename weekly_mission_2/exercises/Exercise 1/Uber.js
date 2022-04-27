const profile ={
    name: "Raúl Arturo Salomon Iglesias",
    phone: "+521234567890",
    email: "raul.sa@gmail.com",
    stars: 4.64,
    travels: [
        [
            "4/12/21 8:08 p. m.",
            "EFECTIVO",
            59.95,
            "MXN",
            "Punto A",
            "Punto B",
            "Tu viaje con Jose Juan"
        ],
        [
            "28/06/21 5:28 a. m.",
            "EFECTIVO",
            0.00,
            "MXN",
            "Cancelado",
            "Punto A",
            "Punto B",
            "Tu viaje con Sergio"
        ]
        ,
        [
            "31/10/20 12:58 p. m.",
            "EFECTIVO",
            227.49,
            "MXN",
            "Punto A",
            "Punto B",
            "Tu viaje con Jose Luis"
        ]
    ],
    wallet: [
        [
            "Uber cash",
            100.00,
            "MXN"
        ],
        [
            "MasterCard",
            1234,
            "09/2030"
        ]
    ],
    favorites: [
        [
            "Casa",
            "Colonia Los Angeles, Woopa #1409"
        ]
    ],
    getProfileInformation: function (){
        console.log(`${this.name}   .   ⭐${this.stars}\n${this.email}\n${this.phone}\n(${this.travels.length}) Viajes\nCartera:`)
        this.wallet.forEach(payment_method => 
            payment_method.forEach(element => console.log(element))            
            )
        return this.favorites.forEach(location => 
            location.forEach(element => console.log(element))            
            )
    }
}

profile.getProfileInformation()