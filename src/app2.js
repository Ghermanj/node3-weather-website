//Serving up MTML and JSON

const express = require('express')
const app =express()

app.get('',(req,res)=>{
   // res.send('Hello express!')
    res.send(',<h1>Hello</h1>')
})

app.get('/help1',(req,res) => {
    //res.send('Help Page')
    res.send({
        name: 'Andrew',
        age: 27
    })
})

app.get('/help2',(req,res) => {
    res.send([{
        name: 'Bong J.',
    },{
        name: 'Gherman'
    }])
})

//
// Goal : Update Routes
//
//1. setup about route to render a title with HTML
//2. Setup a weather route to send back JSON
//   - Object with forecast and location string
//3. Test your work by visiting both in the browser

app.get('/about',(req,res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather',(req,res) => {
    res.send({
        forecast: 'It is raining',
        location: 'Manila'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})

