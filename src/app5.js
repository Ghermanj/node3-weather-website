//Dynamic Pages with Templating

// to install handlebars
// type at web-server directory
// npm i hbs

const path = require('path')
const express = require('express')

const app =express()
const publicDirectoryPath = path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Gherman'
    })
})

app.get('/about',(req,res)=> {
    res.render('about',{
        title: 'About me',
        name: 'Gherman'
    })
})

//
//Goal: Create a template for help page
//
//1. Setup a help template to render a help message to the screen
//2. set up a help route and render the template with an example nessage
//3. Test the result

app.get('/help',(req,res)=> {
    res.render('help',{
        helptext: 'This is some help text'
    })
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

