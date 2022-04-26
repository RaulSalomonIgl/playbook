const User = {
    name: "Raúl Arturo Salomón Iglesias",
    username: "RaulSalomon09",
    biography: "우리가 아는 것은 한 방울의 물입니다. 우리가 무시하는 것은 바다입니다",
    location: "Nuevo León, México",
    website: "https://raulsalomonigl.github.io/my_launchx_blog/",
    dateOfBirth: "11 de septiembre de 2001",
    following: 372,
    followers: 412,
    tweets: 63,
    getNameAndTweets: function(){
        return `${this.name}\n${this.tweets}Tweets`
    },
    getProfile: function (){
        return `@${this.username}\n
        ${this.biography}\n
        ${this.location}     Fecha de nacimiento: ${this.dateOfBirth}\n
        ${this.following} Siguiendo  ${this.followers} Seguidores`
    }
}

console.log("User:")
console.log("Sitio web: " + User.website)
console.log(User.getNameAndTweets())
console.log(User.getProfile())


const trending_topic ={
    trend:[
        {
            category: "Tendencia en México",
            name: "Amazonas",
            tweets: 5931,
            description: "",
            position: 21
        },
        {
            category: "Música · Tendencia",
            name: "Biza",
            tweets: 61500,
            description: "La edición 23 de las BZRP Sessions, la esperada colaboración de Bizarrap con Paulo Londra, está causando revuelo 🎶",
            position: 23            
        }
    ],
    trendsForYou: true,
    location: false,
    getConfiguration: function(){
        return `Trends for you: ${this.trendsForYou} · Show content from this location: ${this.location}`
    },
    getTrends: function(){
        return this.trend.forEach(trends => console.log(`${trends.position} · ${trends.category}\n${trends.name}\n${trends.tweets} Tweets\n`))
    }
}

console.log("\n\nTrending Topic:")
console.log("Trends: " + trending_topic.trend.length)
console.log(trending_topic.getConfiguration())
console.log(trending_topic.getTrends())


const hashtag = {
    name: "DíaNaranja",
    tweets: 10605,
    description: "🎗En el #DíaNaranja todas las mujeres del mundo nos manifestamos por un alto a la violencia y demandamos que sean garantizados todos nuestros derechos.",
    getTweets: function(){
        return this.tweets
    },
    getHashtag: function(){
        console.log(`#${this.name}\n${this.description}\n${this.tweets} Tweets`)
    }
}

console.log("\n\nHashtag:")
console.log(`#${hashtag.name}: ${hashtag.description}\n`)
console.log(hashtag.getTweets() + " Tweets\n")
console.log(hashtag.getHashtag())