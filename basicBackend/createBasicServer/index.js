require('dotenv').config()

// required modules syntax (import file)
const express = require('express')

const app = express()

// listen  server port ()
const port = 4000

const githubData = {
    "login": "Hasnain Makati",
    "id": 259584014,
    "node_id": "U_kgDOD3jwDg",
    "avatar_url": "https://avatars.githubusercontent.com/u/259584014?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/HasnainMakati",
    "html_url": "https://github.com/HasnainMakati",
    "followers_url": "https://api.github.com/users/HasnainMakati/followers",
    "following_url": "https://api.github.com/users/HasnainMakati/following{/other_user}",
    "gists_url": "https://api.github.com/users/HasnainMakati/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/HasnainMakati/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/HasnainMakati/subscriptions",
    "organizations_url": "https://api.github.com/users/HasnainMakati/orgs",
    "repos_url": "https://api.github.com/users/HasnainMakati/repos",
    "events_url": "https://api.github.com/users/HasnainMakati/events{/privacy}",
    "received_events_url": "https://api.github.com/users/HasnainMakati/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Hasnain Makati",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2026-02-05T12:59:28Z",
    "updated_at": "2026-02-08T12:51:15Z"
}


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/twitter', (req, res) => {
    res.send('<h1>Twitter App</h1>')
})

app.get('/login', (req, res) => {
    res.send("<h1>Login Sections</h1>")
})

app.get('/appsile', (req, res) => {
    res.send("<h1>appsile.com</h1>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})