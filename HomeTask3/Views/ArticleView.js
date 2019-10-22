export { CreateFeedUsingView } ;
import {load } from './Modal.js';
import {set } from '../index.js';

//let articleList=[];

let CreateFeedUsingView = (articles,story)=>{
    //articleList=articles;
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

        //image Styling
        let storywall = document.createElement("img"); 
        storywall.className= "rest";
        storywall.src=article.urlToImage;
        storywall.style.margin="10px";
        storywall.style.marginRight="15px";
        storywall.setAttribute('width', '31%');
        storywall.setAttribute('height', '31%');

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

    return story;
}
