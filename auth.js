const uuid = require('uuid').v4

class Auth {
    constructor() {
        this._data = {}
    }

    authorize(id, res) {
        const token = uuid()
        this._data[token] = id
        console.log('Token, ', token)
        res.setHeader('set-cookie', token)
    }

    getUser(req) {
        const token = req.headers.cookie.split('; ')[3]
        console.log(req.headers.cookie.split('; ')[3])
        console.log(req.headers.cookie)
        return this._data[token]
    }

    logout(req, res) {
        const token = req.headers.cookie.split('; ')[3]
        if (!token) return;
        delete this._data[token]
        res.setHeader('set-cookie', '')
    }
}

module.exports = new Auth()
