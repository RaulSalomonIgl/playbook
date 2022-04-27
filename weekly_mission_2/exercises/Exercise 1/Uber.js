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

const travel ={
    user: "Raúl Arturo Salomon Iglesias",
    driver: "Jose Luis",
    date: "31/10/20 12:58 p. m.",
    payment_method: "EFECTIVO",
    amount: 227.49,
    currency: "MXN",
    status: "CONCLUDED",
    drawbacks: [],
    starting_point: "Punto A",
    destination: "Punto B",
    getTravelInformation: function(){
        return `${this.date}   ${this.amount} ${this.currency}\n           ${this.payment_method}`
    },
    gettravelDetails: function(){
        console.log(this.getTravelInformation() + "\n")
        console.log(`·${this.starting_point}\n·${this.destination}\n`)
        console.log(`Tu viaje con ${this.driver}`)
        this.drawbacks.forEach(element => console.log(element))
    }
}

console.log("Viajes: " + travel.getTravelInformation() + "\n\n")
travel.gettravelDetails()