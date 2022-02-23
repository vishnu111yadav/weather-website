const request=require('postman-request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=ae9d14dd41ec2ee512975f08547c7451&query='+latitude+','+longitude 
     
    request({ url,json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable To Connect to weather services',undefined)
        }
        else if(body.error){
            callback('Unable To Find Location, Try Another Search',undefined  )
        }
        else{
            callback(undefined,{
                observation_time:body.current.observation_time,
                temprature:body.current.temperature,
                precipitation:body.current.precip,
                weather_descriptions:body.current.weather_descriptions,
                weather_code:body.current.weather_code,
                wind_speed: body.current.wind_speed,
                wind_degree: body.current.wind_degree,
                wind_dir: body.current.wind_dir,
                pressure: body.current.pressure,
                humidity: body.current.humidity,
                cloudcover: body.current.cloudcover,
                feelslike: body.current.feelslike,
                uv_index: body.current.uv_index,
                visibility:body.current.visibility,
                is_day: body.current.is_day


            })
        }
    })
    }

    module.exports=forecast 