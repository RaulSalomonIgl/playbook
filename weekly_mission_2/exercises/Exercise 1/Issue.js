/*
    +title
    +repositoryNameAssociated
    +status
    +numberOfComments
    +labels
    +author
    +dateCreated
    +lastUpdated
    +getTitleAndAuthor()
    +getGeneralInfo()
*/
const issue = {
    title: "🏆 02 Live 2 Semana 1 [Miércoles 6 de Abril]",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Open",
    numberOfComments: 116,
    labels: ["FINALIZADO","LIVE 2","Semana-1"],
    author: "carlogilmar",
    dateCreated: "22 April",
    lastUpdated: new Date,

    getTitleAndAuthor: function (){
        return `This issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo: function(){
        return `${this.repositoryNameAssociated} > ${this.title}\n
        ${this.author} opened this issue ${this.dateCreated} · ${this.numberOfComments} comments\n
        Labels: ${this.labels} ${this.author} commented ${this.lastUpdated} • Edited`
    }
}

console.log("Status: " + issue.status)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())