const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')
const config = require('config')
const path = require('path')
const cookieParser = require('cookie-parser');
const users_router = require('./routers/users_router')
const page_router = require('./routers/page_router')

const app = express()

app.use(body_parser.json())

app.use(cors())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('*', (req, response, next) => {
    console.log(req.url);
    if (req.url == "/questions.html") {
        if (!req.cookies.auth) {
            response.status(200).redirect('./signup.html')
            return
        }
    }
    if (req.url == "/signup.html") {
        if (req.cookies.auth) {
            response.status(200).redirect('./questions.html')
            return
        }
    }    
    if (req.url == "/logout.html") {
        response.clearCookie('auth')
    }        

    next()
})

app.use(express.static(path.join('.', '/static/')))

app.use('/api/users', users_router)
app.use('', page_router)



 const server_api = app.listen(config.server.port, () => {
     console.log(`====== express server is running on port ${config.server.port} =======`);
 })

