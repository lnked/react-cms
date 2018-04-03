import auth0 from 'auth0-js'

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'celebro.eu.auth0.com',
        clientID: 'ub9kV8AXeeAzwjXnrD8wioB0hbLHao6d',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://celebro.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    })

    login () {
        this.auth0.authorize()
    }
}

// app
import Auth from './Auth/Auth.js'

const auth = new Auth()
auth.login()
