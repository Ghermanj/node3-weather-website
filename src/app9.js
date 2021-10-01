//Styling the Application

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode=require('./utils/geocode')
const forecast = require('./utils/forecast')

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
        title: 'Weather',
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

app.get('/weather',(req,res)=> {
    if (!req.query.address) {
        return res.send({
            error:'You must provide and address!'
        })
    }

    geocode(req.query.address,(error,{latitude,longitude,location}={}) => {
        if (error) {
            return res.send({error})
        }
        forecast(latitude,longitude,(error,forecastData)=> {
          if(error) {
              return res.send({error})
          }

          res.send({
              forecast: forecastData,
              location,
              address: req.query.address
          })
        })


    })

    // res.send({
    //      forecast: 'It is snowing',
    //      location: 'Philadelphia',
    //     address: req.query.address
    // })
})


// Goal 1
//Update weather endpoint to accept address
//1. No address, Send back an error message
//2. Address? Send back the static JSON
//  - Add address property onto JSON which return the provided address
//3. Test /Weather and  /weather?address=Philadelphia

//Goal 2: Wire up weather
//1. Require geocode. forecast into app9
//2. Use the address to GeoCode
//3. Use the coordinates to get forecast
//4. Send back the real forecast and location


app.get('/products',(req,res)=>{
    if (!req.query.search){
        return res.send({
           error: "You must provide a search term"
        })
    }
    console.log(req.query.search)
  res.send({
      product:[]
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
