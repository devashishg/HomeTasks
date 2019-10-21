import { Article } from "./Article.js";
import { Source } from "./source.js";
import { getPromise } from "./Services.js"
//import {sources} from "./Services.js"
export {key};

//const key='827b0ce7adc847d499f5b4ab0d051ebc';
const key = '061c1d73cc384886a562cd04566c1b58';

//Header Only
let headr = document.getElementById("head1");
headr.style.background="#11254d";
headr.style.padding="35px";
headr.style.paddingBottom="45px";
headr.style.paddingTop="20px";
headr.style.color ="white";
headr.style.fontSize="35px";

let head = document.createElement("span");
head.innerHTML = "<b>NEWSFEED</b> <I> &emsp; Yet another newsfeed</I>";

let headr1 = document.getElementById("head");
headr1.style.position="fixed";
headr1.style.top='0';
headr1.style.right='4px';
headr1.style.left='4px';


headr.appendChild(head);


let inputdiv =document.createElement('div');
inputdiv.className="form-inline";
let input =document.createElement('input');
input.setAttribute("type","email");
input.setAttribute("name","email");
input.setAttribute("placeholder","Email Address");
input.required=true;
inputdiv.style.float='Right';
inputdiv.appendChild(input);
let Subscribe =document.createElement('button');
Subscribe.style.border='none';
Subscribe.innerHTML="SUBSCRIBE";
inputdiv.appendChild(Subscribe);
inputdiv.style.padding="none";


headr.appendChild(inputdiv);


//Read More Box Modal
let box=document.createElement("div");
box.className = "Modal";
box.style.display = "none";
let conTent =document.createElement("div");
conTent.className = "modal-content";
box.appendChild(conTent);
document.body.insertBefore(box, document.body.firstChild);






//Div Main
let main = document.getElementById("main");
main.className= "article-container";
main.style.border='none';
main.style.marginTop='105px';
main.style.marginBottom='75px'

//Stories Section
let story = document.createElement("div");
story.className= "seventy";


let set=new Set();
let  articles=[],sources=[];
let url = `https://newsapi.org/v2/sources?language=en&country=in&apiKey=${key}`;


//Button onclick method for Modal data using id 
let load = (i)=>{
    console.log ('Hello'+'  '+i);
    let obj= articles[i];
    console.log(obj);
    box.style.display = "block";   
    conTent.innerHTML   = `<h1>${obj.title}</h1><br/>${obj.description}`;
}


//closing of popup window
window.onclick = (event)=> {
    if (event.target == box) {
      box.style.display = "none";
    }
  }



getPromise(url).then(response => {
    response.json().then(data=>{
        if(data.status === 'ok'){
            let sources=[...data.sources];
            bringArticles(sources);
        }else{
            console.log(data.message);
    }})});


let bringArticles = (obj)=>{
    obj.forEach(e => {
        let s1 = new Source(e);
        sources.push(s1);
        url = `https://newsapi.org/v1/articles?source=${s1.id}&apiKey=${key}`;
    });
    let urls = sources.map((ob)=>{return `https://newsapi.org/v1/articles?source=${ob.id}&apiKey=${key}`});
    console.log(urls);

    Promise.all(urls.map(url => fetch(url)
      .then( r => r instanceof Response ? r.json().catch(err => err) : r )
      .catch(err => console.log(err))
    ))
    .then(results => {
        let statementVariableDummy=[]
        results.map((SourceArtiAll) =>{
            return SourceArtiAll.status === 'ok' ? SourceArtiAll.articles : new Array()})
            .map((arti)=>{
                return statementVariableDummy.push(arti);})
        let objectsArticle=[]
        statementVariableDummy.map((val)=>{return objectsArticle=[...objectsArticle,...val]})
        objectsArticle.map((article)=>{if(article.description.length>1){return articles.push(new Article(article));}});
        console.log(objectsArticle);
        console.log(articles);
        loadArticles(articles);
    });
}


let loadArticles = (articles)=>{
    console.log(articles);
    articles.forEach((article,ind)=>{
        set.add(article.author);

        //Story Elements e.g. title, description etc 
        let titleText = document.createElement("h1");
        let timeCatText = document.createElement("small");
        let Descr = document.createElement("p");
        let readMore = document.createElement("button");
        readMore.className = "button1";
        readMore.innerHTML="Continue Reading";
        readMore.id= `${ind}`;
        readMore.addEventListener('click',()=>{load(ind);})
       // readMore.setAttribute('onclick', () => load(ind));
        

        //Json Data Filling 
        titleText.innerHTML = `${article.title}`;
        Descr.innerHTML = `${article.description.substring(0,300)}....`;
        timeCatText.innerHTML = `Posted on ${article.publishedAt} //  Author is ${article.author}`;

        //image 
        let storywall = document.createElement("img"); 
        storywall.className= "rest";
        storywall.src=article.urlToImage;
        storywall.style.margin="10px";
        storywall.style.marginRight="15px";
        storywall.setAttribute('width', '80px');
        storywall.setAttribute('height', 'auto');

        //One complete Story with image
        let oneArticle = document.createElement('div');
        oneArticle.className = 'article-container hundred';

        // content only 
        let contentStory = document.createElement("div");  
        contentStory.className="seventy";
        contentStory.appendChild(titleText);
        contentStory.appendChild(timeCatText);
        contentStory.appendChild(Descr);
        contentStory.appendChild(readMore);
 
        
        oneArticle.appendChild(storywall);
        oneArticle.appendChild(contentStory);
        
        
        if(ind==articles.length-1){
            oneArticle.style.border='none';
        }
        story.appendChild(oneArticle);


    });
    main.appendChild(story);
    createSideBar(main);

}

let createSideBar=(main)=>{
    let form = document.createElement("form");
    form.setAttribute('action','#');
    form.className = 'rest';
    form.style.paddingLeft= '3%'; 
    form.style.paddingTop= '5%'; 
    
    let selectTitle =document.createElement('span');
    selectTitle.innerHTML = '<h3>SELECT CATEGORY</h3>';
    selectTitle.style.float='center';
    form.appendChild(selectTitle);

    //select Field

    let select =document.createElement('Select');
    let option=document.createElement('Option');
    option.setAttribute('value','All');
    option.innerHTML = 'All';
    select.appendChild(option);
    set.forEach((i)=>{
        let option=document.createElement('Option');
        option.setAttribute('value',i);
        option.innerHTML = i;
        select.appendChild(option);
    });
    select.setAttribute('name','category');
    select.addEventListener('change',()=>{filter(this);})
    //select.setAttribute('onchange',`filter(this)`);
    form.appendChild(select);


    
    //Subscribe Button and field

    main.appendChild(form);
}

//createSideBar(main);


//Filter feeds based on Category
let filter = (obj)=>{
    
    var obj = document.getElementsByName('category');
    console.log(obj[0]);let str=obj[0].value;console.log(str);
    var elements = document.querySelectorAll('.hundred');
    for (let j = 0; j < elements.length; j++) {
        if(elements[j].childNodes[1].childNodes[1].innerHTML.split('is ')[1] != str && str!='All'){
            elements[j].style.display = 'none';
        }else{
            elements[j].style.display = 'flex';
        }
        if(str=='All'){
            elements[j].style.display = 'flex';
        }
    }
}

    let foot = document.getElementById("foot");
    
    foot.style.bottom='0';
    foot.style.position="fixed";
    foot.style.background="#11254d";
    foot.style.right='4px';
    foot.style.left='4px';
    let footer = document.createElement("div");
    footer.style.padding="20px";
    footer.style.color ="white";
    footer.innerHTML = "<center>© Newsfeed 2019</center>";
    foot.appendChild(footer);






