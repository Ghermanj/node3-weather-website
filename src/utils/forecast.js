const request = require('request');

const forecast =(latitude,longitude,callback) => {
    const url='http://api.weatherstack.com/current?access_key=8155b80d7cb09b769a39a80223369a81&query='+ latitude + ',' + longitude + ''
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            //console.log(body)
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature +
                ' degrees out, it feels like ' + body.current.feelslike + ' degrees. There is a ' + body.current.precip +
                '% chance of rain. Humidity is ' + body.current.humidity + '%.The ideal relative humidity for health ' +
                'and comfort is somewhere between 30-50% according to Mayo Clinic. So 100 percent humidity might not mean ' +
                'rain, but it does mean dew.' )

        }
    })
}

module.exports = forecast
