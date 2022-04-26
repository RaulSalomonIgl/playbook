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

console.log("Sitio web: " + User.website)
console.log(User.getNameAndTweets())
console.log(User.getProfile())