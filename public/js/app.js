console.log('Client side javascript is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data)=> {
//         console.log(data)
//     })
// })

//Goal: Fetch weather
//
//1. Setup a call to fetch to fetch weather from Boston
//2. Get the parse JSON response
// - if error property, print error
// - of no error property, print location and forecast
//4. Refresh the browser and test your work



const weatherForm= document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()

    const location = search.value
    messageOne.textContent='Loading...'
    messageTwo.textContent=''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data)=>{
            if (data.error) {
                messageOne.textContent=data.error
              //  console.log(data.error)
            } else {
               // console.log(data.location)
               // console.log(data.forecast)
                messageOne.textContent=data.location
                messageTwo.textContent=data.forecast
            }
        })
    })

    // console.log(location)
})

//Goal - Use the input value to get weather
//
//1. Integrate fetch call into the submit callback
//2. USe the search text as the address query string value
//3. Submit the form with the valid and invalid value to test
