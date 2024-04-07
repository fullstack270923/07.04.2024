const express = require('express')
const users_dal = require('../dals/users_dal')

const router = express.Router()

router.get('/', async (request, response) => {
    if (!request.cookies.auth) {
        response.status(200).redirect('./signup.html')
        return
    }
    else {
        response.status(200).redirect('./questions.html')
        return
    }
})

router.post('/signup_post', async (request, response) => {
    //response.redirect('/error_signup.html')
    //response.status(200).redirect('./error_signup.html')

    //const email = request.body.email
    //const password = request.body.password
    //const { email, password } = request.body
    console.log(request.body);
    //const result = users_dal.insert_user({ email, password})
    //if (result.status === "success") {
    //response.cookie('auth',`${email}`)

    console.log(request.cookies);
    response.cookie('auth', `email=itayhau@gmail.com`)
    response.status(200).redirect('./questions.html')
    //}
    //else {
    //response.status(200).redirect('./error_signup.html')        
    //}
})

module.exports = router