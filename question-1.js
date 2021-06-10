// 1. Most Active Authors

const https = require('https')

function httpRequest(options) {
    return new Promise ((resolve, reject) => {
        const request = https.request(options, response => {
            let body = [];
            response.on('data', c => body.push(c))
            response.on('end', () => resolve(JSON.parse(body)));
            response.on('error', e => reject(e));
        });
        request.end();
    })
}

function newOptions(page) {
    return {
        method: 'GET',
        host: 'jsonmock.hackerrank.com',
        port: 443,
        path: `/api/article_users?page=${page}`
    }
}

async function getUsers(page = 1) {
    let options = newOptions(page)
    const response = await httpRequest(options)
    if (response.data.length > 0) {
        const nextPage = await getUsers(page+1)
        return response.data.concat(nextPage)
    }
}

async function getUsernames(threshold) {
    const users = await getUsers()
    const filtered = users.filter(u => u?.submission_count > threshold)
    const usernames = filtered.map(u => u.username)
    return usernames
}

async function main() {
    const usernames = await getUsernames(10)
    debugger
}

main()