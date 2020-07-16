
//const savebtn=document.getElementById("save");
//const showtn=document.getElementById("show");
//const removebtn=document.getElementById("remove");
const localserv= document.getElementById("localStorage");
const savedtrip=document.getElementById("savedtrip")
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
              const resindex=res[res.length-1]
              console.log(res[res.length-1])
              if(localStorage.length!=0 ){
                console.log(!checklocalStorage(res[res.length-1].city))
                if(!checklocalStorage(res[res.length-1].city)){
                  localStorage.setItem(`Trip ${localStorage.length+1}`, JSON.stringify(res[res.length-1]));
              }
            }else localStorage.setItem(`Trip ${localStorage.length+1}`, JSON.stringify(res[res.length-1]));

              return res;
            }catch(error){
              console.log("error", error);
            }        

}// savebtn
function checklocalStorage(city){
  var check;
  for(let i =0; i<localStorage.length; i++){
    const key= localStorage.key(i);
     var value = JSON.parse(localStorage.getItem(key));
   if(city == value.city){
      check= true
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
              Typical  is weather tempertur  is  ${JSON.stringify(value.temperture)}  and it is  <br />
              ${JSON.stringify(value.description)}  <br />
              ================================================
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

