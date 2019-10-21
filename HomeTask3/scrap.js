
//in a async function

let response = await fetch(url);
let data = await response.json();
return data;



























//this.url = `https://newsapi.org/v1/articles?source=${thid.id}&apiKey=${key}`;

// sources =  getSources(url);
// sources.forEach((s)=>{
//     let obj=new Source(s.id,s.name);
//     articles = [...articles,...obj.getSourceFeeds()];
// })


// let urls=['https://newsapi.org/v2/sources?language=en&country=us&apiKey=827b0ce7adc847d499f5b4ab0d051ebc']
// Promise.all(urls.map(url => fetch(url)
//       .then( r => r instanceof Response ? r.json().catch(err => err) : r )
//       .catch(err => console.log(err))
//     ))
//     .then(results => {
//       console.log(results[0]);
//       console.log(results[1]);
//     });




//     promise = new Promise(resolve => resolve(fetch('https://newsapi.org/v1/articles?source=the-times-of-india&apiKey=827b0ce7adc847d499f5b4ab0d051ebc')))
//     .then(response=>{console.log(response.json()
//         .then(data=>{console.log(data.articles)}))})
//     .catch(error=>{console.log(error); console.log('In catch');});