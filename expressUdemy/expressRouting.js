const express = require('express');
const app = express();

// app object has a few methods:
// 1. get - read
//  --DEFAULT for all browsers is get.
// 2. post - create
// 3. delete - delete
// 4. put - update
// 5. all - I will accept any method


// Take 2 args:
// 1. path
// 2. callback to run if an HTTP request that matches THIS verb
//  is made to the path in #1


app.all('/',(req, res)=>{
    res.send(`<h1>Welcome to the home page...`)
})
app.get('/',(req, res)=>{
    res.send(`<h1>Welcome to the home GET page...`)
})
app.post('/',(req, res)=>{
    res.send(`<h1>Welcome to the home POST page...`)
})
app.delete('/',(req, res)=>{

})
app.put('/',(req, res)=>{

})

app.listen(3000)
console.log("3000 is the server port.")