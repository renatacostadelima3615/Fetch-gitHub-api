// import { repositories } from "../services/repositories";

const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
       
        // this.followers = gitHubUser.followers
        // this.following = gitHubUser.following
        // this.publicRepos = gitHubUser.public_repos

    },
    // followers: 0,
    // following: 0,
    // publicRepos: 0
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export {user}