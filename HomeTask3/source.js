import { key } from './index'
export {Source};

class Source {
    constructor(id, name,...res) {
      this.id = id;
      this.name = name;
      this.array=[];
      this.url = `https://newsapi.org/v1/articles?source=${thid.id}&apiKey=${key}`;
    }
    
    get id(){
      return this.id;
    }
    get name(){
      return this.name;
    }
    getSourceFeeds = () =>{
      new Promise(resolve => resolve(fetch(this.url)))
        .then(response=>{console.log(response.json()
          .then(data=>{this.array = data.articles;}))})
        .catch(error=>{console.log(error);});
    }
    
  }


l
 