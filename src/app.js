const path=require('path')
const express=require('express') 
const hbs=require('hbs')

const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')
    
const app=express()
const port=process.env.PORT || 3000
//Define Path for Express Configuration
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//setup Handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
  
//setup static directory to serve
app.use(express.static(publicDirectoryPath)) 

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Vishal yadav '
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Vishal yadav'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help ',
        name:'Vishal yadav'
    })
})


app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            Error:'You must provide an address!'
        })
    }
    geocode(req.query.address ,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        } 
            forecast(latitude,longitude, (error, forecastData) => {
                if(error){
                    return res.send({error} )
                }
              res.send({
                    forecast:forecastData,
                    location,
                    address:req.query.address
                })
              })
        }  )

   
})
app.get('/products',(req,res)=>{
    if(!req.query.search) 
    {
       return  res.send({
            error: 'you must provide an search term'})
    }
    console.log(req.query.search )
    res.send({
        products:[]
    })
})



app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:"vishal yadav",
        errorMessage:'Help article Not Found.'
         
      })
})

app.get('*',(req,res)=>{
res.render('404',{
  title:'404',
  name:"vishal yadav",
  errorMessage:'Page Not Found.'
   
})
})

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})