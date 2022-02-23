console.log('Client side javascript file is loaded')

 

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
const message3=document.querySelector('#message-3')
const message4=document.querySelector('#message-4')
const message5=document.querySelector('#message-5')
const message6=document.querySelector('#message-6')
const message7=document.querySelector('#message-7')
const message8=document.querySelector('#message-8')
const message9=document.querySelector('#message-9')
const message10=document.querySelector('#message-10')


 

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location=search.value 

    messageOne.textContent='Loading...'
    messageTwo.textContent=''

    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
       if(data.error)
       { messageOne.textContent=data.error}
       else
        {
            messageOne.textContent=data.location
            messageTwo.textContent='weather description:-'+data.forecast.weather_descriptions  
            message6.textContent=' wind_speed:-'+data.forecast.wind_speed
            message3.textContent=' Temprature:-'+data.forecast.temprature
            message7.textContent='pressure:-'+data.forecast.pressure
            message4.textContent=' Feels like:-'+data.forecast.feelslike
            message8.textContent='humidity:-'+data.forecast.humidity
            message5.textContent='precipitation :-'+data.forecast.precipitation
            message9.textContent='Is_day:-'+data.forecast.is_day
            message10.textContent='This section gives more info'
            
        }
        
    })
})
})
 


