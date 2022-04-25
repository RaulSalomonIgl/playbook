/*
    PullRequest
    +title
    +branchName
    +dateCreated
    +status
    +repositoryNameAssociated
    +getStatus()
    +getTitleAndAutor()
*/
const PullRequest = {
    title: "Mi primer PK",
    branchName: "main",
    author: "RaulSalomonIgl",
    dateCreated: "12 April",
    status: "Open",
    repositoryNameAssociated: "launch-x-explorers",
    getStatus: function() {
        return this.status
    },
    getTitleAndAutor: function(){
        return `${this.title}\n${this.author} wants to merge 1 commit`
    }
}

console.log("Nombre del repositorio asociado: " + PullRequest.repositoryNameAssociated)
console.log("Status: " + PullRequest.getStatus())
console.log(PullRequest.getTitleAndAutor())