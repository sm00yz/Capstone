import './styles/style.scss'
import './views/background.jpeg'
import { handleReq }  from './js/app.js'
import{ removebtn, showtn, savebtn, } from './js/btn'
console.log("hi from index.js before event listener")

//add eventListener

document.addEventListener('DOMContentLoaded' , () => {
    document.getElementById('submit').addEventListener('click', 
    handleReq);
    document.getElementById('save').addEventListener('click', savebtn);
    document.getElementById('show').addEventListener('click', showtn);
    document.getElementById('remove').addEventListener('click', removebtn);
    });
export{
   showtn,
    savebtn,
    removebtn
}
 
