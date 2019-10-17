export {Article};

class Article {
    constructor(author, title,description,url,urlToImage,publishedAt) {
      this.author = author;
      this.title = title;
      this.description = description;
      this.url = url;
      this.urlToImage = urlToImage;
      this.publishedAt = publishedAt;
    }
    
    get author(){
        return this.author;
    }
    get title(){
        return this.title;
    }
    get description(){
        return this.description;
    }
    get url(){
        return this.url;
    }
    get urlToImage(){
        return this.urlToImage;
    }
    get publishedAt(){
        return this.publishedAt;
    }
    
  }


