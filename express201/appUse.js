const express = require('express');
const app = express();

// Express = 2 things
// 1. Router
// 2. Middleware that comprises a webframwork

// REq -----MiddleWare----> Res
// Middleware function is ANY function that has access to the req, res, next object.


// REq -----MiddleWare----> Res
// 1. Request comes in. 
// 2. We need to validate the user, sometimes.
// 3. We need to store some things in the DB.
// 4. If there is data from the user we need to parse it and store it.
// 5. Res

function validateUser(req,res,next){
    // get info out of the req object
    // do some stuff with the DB
    res.locals.validated = true
    console.log("VALIDATED RAN!")
    next();
}

app.use('/admin',validateUser)
app.get('/',validateUser)

app.get('/',(req, res, next)=>{
    res.send("<h1>Main Page")
    console.log(res.locals.validated)
})

app.get('/admin',(req, res, next)=>{
    res.send("<h1>Admin Page")
    console.log(res.locals.validated)
})
app.listen(3000)