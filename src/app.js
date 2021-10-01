//EXPRESS

const express = require('express')
 const app =express()

app.get('',(req,res)=>{
    res.send('Hello express!')
})

app.get('/help',(req,res) => {
    res.send('Help Page')
})

app.get('/about',(req,res) => {
    res.send('About')
})

app.get('/weather',(req,res) => {
    res.send('Your weather')
})


//app.com
//app.com/help
//app.com/about

//Goal : setup two new routes
//
//1. Setup an about route and render a page title
//2. Setup a weather route and render a page title
//3. Test your work by visiting both in the browser


app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})

