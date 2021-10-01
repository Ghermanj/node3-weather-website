//Advanced Templating

const path = require('path')
const express = require('express')
const hbs = require('hbs')

//
// Goal: Create a partial for the footer
//
//1. Setup the template for the footer partial ("Created by some name")
//2. Render the partial at the bottom of all the three pages
//3. Test your work by visiting the three pages

const app = express()
//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'/templates/views')
const partialsPath = path.join(__dirname,'/templates/partials')


//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
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

app.get('/help',(req,res)=> {
    res.render('help',{
        helptext: 'This is some help text',
        title: "Help",
        name: 'Gherman'

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
