
const localserv= document.getElementById("localStorage");
const savedtrip=document.getElementById("section4")
const showtn = async(event)=>{
  if(savedtrip.style.display==="block"){
     savedtrip.style.display="none"
  }else {
    savedtrip.style.display="block"
    writingData();
}
}
const savebtn= async(event)=>{
  console.log("Hi")
  const res= await fetch("/all") 
  .then(res => res.json())
            try{ 
              console.log("data from local server")
              console.log(res);
              console.log(res[res.length-1])
              if(localStorage.length!=0 ){
                console.log(!checklocalStorage(res[res.length-1].city))
                if(!checklocalStorage(res[res.length-1].city, res[res.length-1].date)){
                  localStorage.setItem(`Trip ${localStorage.length+1}`, JSON.stringify(res[res.length-1]));
              }
            }else localStorage.setItem(`Trip ${localStorage.length+1}`, JSON.stringify(res[res.length-1]));

              return res;
            }catch(error){
              console.log("error", error);
            }        

}// savebtn
function checklocalStorage(city, date){
  var check;
  for(let i =0; i<localStorage.length; i++){
    const key= localStorage.key(i);
     var value = JSON.parse(localStorage.getItem(key));
   if(city == value.city){
     if(date==value.date)
      check= true
   }else if(city == value.city & date> value.date){
     check=false
    }else check=false
                
  }//for
  return check;              
}
function writingData(){
  document.getElementById("localStorage").innerHTML="";
  for(let i =0; i<localStorage.length; i++){
              const key= localStorage.key(i);
              var value = JSON.parse(localStorage.getItem(key));
              document.getElementById("localStorage").innerHTML +=`${key}: <br /> city is  ${JSON.stringify(value.city)} <br />
              Country is  ${JSON.stringify(value.countryCode)} <br />
              departing  date is  ${JSON.stringify(value.date)} <br />
              Typical  is weather tempertur  is  ${JSON.stringify(value.temperture)}  and it is  <br />
              ${JSON.stringify(value.description)}  <br />
            
              <br />`;
            
            }
}//writing Data

const removebtn =async(event)=>{
  localStorage.clear()
  localserv.innerHTML="";
}

export {
    showtn,
    savebtn,
    removebtn

}

