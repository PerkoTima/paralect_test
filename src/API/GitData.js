import axios from "axios";

export async function getUser(userName){
    const response = await axios.get(`https://api.github.com/users/${userName}`,
    {
      headers: {
        'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    })

    return response
}

export async function getRepo(userName, page = 1){
    const response = await axios.get(`https://api.github.com/users/${userName}/repos`, {
      headers: {
        'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      params: {
        per_page: 4,
        page: page
      }
    })

    return response
}