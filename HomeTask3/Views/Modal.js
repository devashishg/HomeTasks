
import {articles as articleList} from '../index.js';

//Read More Box Modal

export let box=document.createElement("div");
box.className = "Modal";
box.style.display = "none";
export let conTent =document.createElement("div");
conTent.className = "modal-content";
box.appendChild(conTent);
document.body.insertBefore(box, document.body.firstChild);



//Button onclick method for Modal data using id 
export let load = (i)=>{
    //console.log ('Hello'+'  '+i);
    let obj= articleList[i];
    //console.log(obj);
    box.style.display = "block";   
    conTent.innerHTML   = `<h1>${obj.title}</h1><br/>${obj.description}`;
}




//closing of popup window
window.onclick = (event)=> {
    if (event.target == box) {
      box.style.display = "none";
    }
}
