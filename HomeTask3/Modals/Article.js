export {Article};

class Article {
    constructor(articleObj) {

        //console.log(articleObj);
      this.author = articleObj.author;
      this.title = articleObj.title;
      this.description = articleObj.description;
      this.url = articleObj.url;
      this.urlToImage = articleObj.urlToImage;
      this.publishedAt = articleObj.publishedAt;
    }
    
    get authorValue(){
        return this.author;
    }
    get titleValue(){
        return this.title;
    }
    get descriptionValue(){
        return this.description;
    }
    get urlValue(){
        return this.url;
    }
    get urlToImageValue(){
        return this.urlToImage;
    }
    get publishedAtValue(){
        return this.publishedAt;
    }


    set authorValue(author){
        this.author=author;
    }
    set titleValue(title){
        this.title=title;
    }
    set descriptionValue(description){
        this.description=description;
    }
    set urlValue(url){
        this.url=url;
    }
    set urlToImageValue(urlToImage){
        this.urlToImage=urlToImage;
    }
    set publishedAtValue(publishedAt){
        this.publishedAt=publishedAt;
    }
    
  }


