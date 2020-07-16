var data={}
var today= new Date(); //today date to compare it with the entered date    


function checkDate(userDate){
  var endofweek=new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
 //  console.log('end of week date '+ endofweek) 
   if(userDate < endofweek && userDate > today ){
     // console.log("it is withing week ");
      return 0; // the date is within week
  }if (userDate > today){
  // console.log("it is in the future ");
    return 1  // the date is in the future
  }else {
      return -1; 
  }
}//checkDate
//function to find trip duration
function date_diff (userDate, today){
var timeDiff = Math.abs(userDate.getTime() - today.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
return diffDays;
}
//handleReq function to handle the form submission
const handleReq= async(event)=>{
event.preventDefault();  
 const date= document.getElementById('date').value;
/* Function to GET GEONAMES API Data*/
const city= document.getElementById('location').value;
const geonameAPIURL='http://api.geonames.org/geoCodeAddressJSON?q='
const geonamesKey= '&username=sm00yz'
const getDatafromGeonames =async (geonameAPIURL, city, geonamesKey) =>{
    const res= await fetch(geonameAPIURL+city+geonamesKey)
    .then(res => res.json())
    
    try{
      console.log("Location data")
      console.log(res);
      data.city=res.address.locality;
      data.countryCode= res.address.countryCode;
     return res;
    }catch(error){
      console.log("error", error);
    }
 }// getDatafromGeonames

var userDate= new Date(date);
const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(userDate ) 
    const weatherKey= '&key=49eaa17bb5c04ac6ae7f13db6adb8dae'
    // getting current waether info
    const currentweathergetData= async(lat, lng)=>{
        const currentweatherAPIURL= `http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}`
            const res= await fetch(currentweatherAPIURL+weatherKey)
            .then(res => res.json())
            try{ 
              console.log("Weather data")
              console.log(res);
              return res;
            }catch(error){
              console.log("error", error);
            }
            };//currentweathergetData
     // getting future weather info 
            const futureWeathergetData= async(lat, lng)=>{
                const futureWeatherAPIURL= `http://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}`
                const res= await fetch(futureWeatherAPIURL+weatherKey)
                .then(res => res.json())
                try{ 
                  console.log(res);
                  return res;
                }catch(error){
                  console.log("error", error);
                }
                };    //futureWeathergetData
      //get image for the city from pixabay          
  const pixabayURL= "https://pixabay.com/api/"
  const pixaBayApiKey= "?key=17359837-be2957915a78184722fc76efe&q=";
  const getCityImage= async(pixabayURL, pixaBayApiKey, city)=>{
        const res= await fetch(pixabayURL+pixaBayApiKey+city)
        .then(res => res.json())
        try{ 
          console.log("image data")
          console.log(res);
          data.imageURL=res.hits[0].previewURL;
          return res;
        }catch(error){
          console.log("error", error);
        }
        };//getCityImage
  //update DOM element 
 const updateDomElement= async()=>{
  document.getElementById('info').style.display="block"
  document.getElementById('cityImage').style.display="block"
  const req= await fetch('/all')
  .then(req => req.json())
  try{
    document.getElementById('info').innerHTML= 
    `My Trip to : ${data.city} ,  ${data.countryCode} is ${date_diff(userDate, today)} days away
    <br /> departing date: ${day}-${month}-${year} <br />`+
    `typical weather for then is: `+"<br />"+
    `tempretur: ${data.tempretur} <br />  ${data.description}`  ;
    document.getElementById('cityImage').src=data.imageURL;
   return data;
  }catch(error){
    console.log("error", error);
  }
}

//function calls
getDatafromGeonames(geonameAPIURL,city,geonamesKey).then((res)=>{
  if(checkDate(userDate) === 0){
    const cwd= currentweathergetData(res.address.lat, res.address.lng);
   return cwd;
    
}else if (checkDate(userDate) === 1){
   const fwd= futureWeathergetData(res.address.lat, res.address.lng);
   return fwd;
}else {
    console.log("you have entered wrong date")
}
}).then((res)=>{
  data.tempretur=res.data[0].temp;
  data. description=res.data[0].weather.description;
 postData('/all', data)
 updateDomElement()
})
getCityImage(pixabayURL, pixaBayApiKey, city);
}//handlereq function
//post data  to local server
const postData= async(url='', data={})=>{
  console.log("inside Post");
  console.log(JSON.stringify(data) );
  const res= await fetch(url, {
    method: 'POST',
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then(res => res.json());
   try{
    console.log(res);
    return res;
   }catch(error){
    console.log("error", error);
  }
} 

export {
    handleReq,
    checkDate,
    date_diff

  }
  