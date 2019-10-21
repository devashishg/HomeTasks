export{getPromise};



let getPromise = async (url)=>{
  return new Promise(resolve => resolve(fetch(url)),
  reject=>resolve(console.log('request rejected')));
};

