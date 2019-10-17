export {Article};

class Source {
    constructor(id, name,...res) {
      this.id = id;
      this.name = name;
      this.array=[];
    }
    
    get id(){
        return this.id;
    }
    get name(){
        return this.name;
    }
    
    feeds = () =>{
        let url = `https://newsapi.org/v1/articles?source=${thid.id}&apiKey=827b0ce7adc847d499f5b4ab0d051ebc`;
        let promise = new Promise(resolve => resolve(fetch('https://newsapi.org/v2/sources?language=en&country=us&apiKey=827b0ce7adc847d499f5b4ab0d051ebc')),
                        reject =>{console.log(reject);console.log();})
                        .then(response=>{console.log(response); console.log('In then');})
                        .catch(error=>{console.log(error); console.log('In catch');});
    }
    
  }


l
 