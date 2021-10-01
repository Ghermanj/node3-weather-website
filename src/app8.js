//404 Pages

const path = require('path')
const express = require('express')
const hbs = require('hbs')

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
        name: 'Gherman Jaramillo'
    })
})

app.get('/about',(req,res)=> {
    res.render('about',{
        title: 'About me',
        name: 'Gherman Jaramillo'
    })
})

 app.get('/help',(req,res)=> {
     res.render('help',{
         helptext: 'This is some help text',
         title: "Help",
         name: 'Gherman Jaramillo'

     })
 })

app.get('/help/*',(req,res)=> {
    res.render('404',{
         title: '404',
        name: 'Gherman Jaramillo',
        errorMessage: 'Help Article not found!'

    })
})


app.get('*',(req,res)=> {
    res.render('404', {
        title: '404',
        name: 'Gherman Jaramillo',
        errorMessage: 'Page not Found'
    })
})



app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})
