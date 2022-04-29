class GitHub{
    constructor(user){
      this.user = user
      this.repo = []
      this.issues = []
      this.pullrequest = []
    }

    get getUser(){
      return this.user
    }

    get getRepo(){
      return this.repo
    }
    set setRepo(repo){
      this.repo = repo
    }

    get getIssues(){
      return this.issues
    }
    set setIssues(issues){
      this.issues = issues
    }

    get getPullrequest(){
      return this.pullrequest
    }
    set setPullrequest(pullrequest){
      this.pullrequest = pullrequest
    }

    getInfo (){
      console.log(this.getRepo)
      console.log(this.getIssues)
      console.log(this.getPullrequest)
    }
}

class Repository {
  constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close){
    this.name = name
    this.author = author
    this.language = language
    this.numberOfCommits = numberOfCommits
    this.stars = stars
    this.forks = forks
    this.issues_open = issues_open
    this.issues_close = issues_close
  }

  set setName(name){
    this.name = name
  }
  set setAuthor(author){
    this.author = author
  }
  set setLanguage(language){
    this.language = language
  }
  set setNumberOfCommits(numberOfCommits){
    this.numberOfCommits = numberOfCommits
  }
  set setStars(stars){
    this.stars = stars
  }
  set setForks(forks){
    this.forks = forks
  }
  set setIssues_open(issues_open){
    this.issues_open = issues_open
  }
  set setIssues_close(issues_close){
    this.issues_close = studeissues_closents
  }

  getTotalIssues(){
    return this.issues_open + this.issues_close
  }

  getGeneralInfo(){
    return `This repository ${this.name} was created by ${this.author} has ${this.stars} stars`
  }
}

class PullRequest {
  constructor(repositoryNameAssociated, title, lines_changed, branchName, author){
    this.repositoryNameAssociated = repositoryNameAssociated
    this.title = title
    this.lines_changed = lines_changed
    this.status = "OPEN"
    this.dateCreated = new Date()
    this.branchName = branchName
    this.author = author
    }
    get getRepositoryNameAssociated(){
      return this.repositoryNameAssociated
    }
    set setRepositoryNameAssociated(repositoryNameAssociated){
      this.repositoryNameAssociated = repositoryNameAssociated
    }

    get getTitle(){
      return this.title
    }
    set setTitle(title){
      this.title = title
    }

    get getLines_changed(){
      return this.lines_changed
    }
    set setLines_changed(lines_changed){
      this.lines_changed = lines_changed
    }

    get getStatus(){
      return this.status
    }
    set setStatus(status){
      this.status = status
    }

    get getDateCreated(){
      return this.dateCreated
    }

    get getBranchName(){
      return this.branchName
    }
    set setBranchName(branchName){
      this.branchName = branchName
    }

    get getAuthor(){
      return this.author
    }
    set setAuthor(author){
      this.author = author
    }

    getInfo(){
      return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated} by ${this.author}`
    }
}

class Issues{
  constructor(title, repositoryNameAssociated, labels, author){
    this.title = title,
    this.repositoryNameAssociated = repositoryNameAssociated,
    this.status = "OPEN",
    this.numberOfComments = 0,
    this.labels = labels,
    this.author = author,
    this.dateCreated = new Date(),
    this.lastUpdated = this.dateCreated
  }
  get getTitle (){
    return this.title
  }
  set setTitle (title){
    this.title = title
  }

  get getRepositoryNameAssociated (){
    return this.repositoryNameAssociated
  }
  set setRepositoryNameAssociated (repositoryNameAssociated){
    this.repositoryNameAssociated = repositoryNameAssociated
  }

  get getStatus (){
    return this.status
  }
  set setStatus (status){
    this.status = status
  }

  get getNumberOfComments (){
    return this.numberOfComments
  }
  set setNumberOfComments (numberOfComments){
    this.numberOfComments = numberOfComments
  }

  get getLabels (){
    return this.labels
  }
  set setLabels (labels){
    this.labels = labels
  }

  get getAuthor (){
    return this.author
  }
  set setAuthor (author){
    this.author = author
  }

  get getDateCreated (){
    return this.dateCreated
  }

  get getLastUpdated (){
    return this.lastUpdated
  }
  set setLastUpdated (lastUpdated){
    this.lastUpdated = lastUpdated
  }

  getTitleAndAuthor(){
    return `This issue ${this.title} was created by ${this.author}`
  }

  getGeneralInfo(){
    return `${this.repositoryNameAssociated} > ${this.title}\n
    ${this.author} opened this issue ${this.dateCreated} · ${this.numberOfComments} comments\n
    Labels: ${this.labels} ${this.author} commented ${this.lastUpdated} • Edited`
  }

}


let repo = [
  new Repository("playbook", "RaulSalomonIgl", "Js", "23", 2, 0, 0, 0),
  new Repository("my_launchx_blog", "RaulSalomonIgl", "SCSS", "23", 2, 0, 0, 0),
  new Repository("PokeAPI", "RaulSalomonIgl", "CSS", "23", 2, 0, 0, 0)
]
let pullrequest = new PullRequest("playbook","Primer PK","//Agregando comentario","main","RaulSalomonIgl")
let issue = new Issues("Semana 2", "MissionNodeJs",["Semana 2", "Live 3", "Finalizado"], "Carlo")
const gitHub = new GitHub("Raul")
gitHub.setRepo = repo
gitHub.setIssues = issue
gitHub.setPullrequest = pullrequest
gitHub.getInfo()