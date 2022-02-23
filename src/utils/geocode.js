const request=require('postman-request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent (address)+'.json?access_token=pk.eyJ1IjoidmlzaGFsMTExeWFkdiIsImEiOiJja3p2amwydmIwNzFyMnlsbGY1eDhpZ2Z3In0.6WoAh0wjVpLcuYp5flvkNg&limit=1'
request({url,json:true},(error,{body})=>{
    if(error)
        {
            callback('Unable To Connect Location services',undefined)
        }
        else if(body.features.length===0)
        {
            callback('Unable To Find Location, Try Another Search',undefined )
        }
        else{
       console.log(body.features[0].center[1])
       console.log(body.features[0].center[0])
        callback(undefined,{
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[0],
            location:body.features[0].place_name
        })
        
        }
})
}
module.exports=geocode