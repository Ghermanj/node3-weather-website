//Serving up Static Asste

const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app =express()
const publicDirectoryPath = path.join(__dirname,'../public')

//
//Goal: Create two more Html files
//
//1. Creat a Html page for about with about title
//2. create html page for help with Help Title
//3. remove the old route handles for both
//4. Visit both in the browser to test your work
//5. in the browser type -> localhost:3000/about.html
//   and I just commented the app.get('/help' ...

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.send(',<h1>Hello</h1>')
})

// app.get('/help',(req,res) => {
//     res.send({
//         name: 'Andrew',
//         age: 27
//     })
// })
//
// app.get('/about',(req,res) => {
//     res.send('<h1>About</h1>')
// })

app.get('/weather',(req,res) => {
    res.send({
        forecast: 'It is raining',
        location: 'Manila'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})

