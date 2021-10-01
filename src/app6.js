//Customizing Views Directory

const path = require('path')
const express = require('express')

//console.log(__dirname)

const app = express()
//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'/templates')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)

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
