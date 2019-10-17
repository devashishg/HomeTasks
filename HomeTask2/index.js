import { Article } from "../HomeTask3/Article";


//Header Only
let headr = document.getElementById("head");
headr.style.background="#11254d";
headr.style.padding="15px";
headr.style.color ="white";
headr.style.fontSize="25px";
headr.style.position="relative";
let head = document.createElement("div");
head.innerHTML = "<b>Newsfeed</b> <I> &emsp; <small>Yet another newsfeed</small></I>";
headr.appendChild(head);


//Read More Box Modal
let box=document.createElement("div");
box.className = "Modal";
box.style.display = "none";
let conTent =document.createElement("div");
conTent.className = "modal-content";
box.appendChild(conTent);
document.body.insertBefore(box, document.body.firstChild);


//Div Main
let sources,feeds;
let main = document.getElementById("main");
main.className= "article-container";
main.style.border='none';

//Stories Section
let story = document.createElement("div");
story.className= "seventy";




// //HTTP Request
// var request = new XMLHttpRequest();
// request.open('GET','https://devashishg.github.io/HomeTasks/HomeTask2/file.json');
// request.onload = ()=>{
//     data = JSON.parse(request.responseText);
//     loadElement(data);
// };
// request.send();


let urls=['https://newsapi.org/v2/sources?language=en&country=us&apiKey=827b0ce7adc847d499f5b4ab0d051ebc']
Promise.all(urls.map(url => fetch(url)
      .then( r => r instanceof Response ? r.json().catch(err => err) : r )
      .catch(err => console.log(err))
    ))
    .then(results => {
      console.log(results[0]);
      console.log(results[1]);
    });


    let promise = new Promise(resolve => resolve(value));
    let promise = new Promise((resolve, reject) => reject(error));


    promise = new Promise(resolve => resolve(fetch('https://newsapi.org/v1/articles?source=the-times-of-india&apiKey=827b0ce7adc847d499f5b4ab0d051ebc')))
    .then(response=>{console.log(response.json().then(data=>{console.log(data.articles)}))})
    .catch(error=>{console.log(error); console.log('In catch');});