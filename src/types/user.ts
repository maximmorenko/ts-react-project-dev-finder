export type LocalGithubUser = {
    login: string,
    id: number,
    avatar: string,
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter: string,
    repos: number,
    followers: number,
    following: number,
    created: string,
}

export type GithubUser = {
    login: string,
    id: number,
    avatar_url: string, //в дальнейшем сделаем ремапинг, перепишем названия на кемлкейс
    name: string,
    company: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string,
}

export type GithubError = {
    massage: string,
    documentation_url: string,
}

