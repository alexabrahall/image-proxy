const fetch = require('node-fetch');


//download image and return its buffer
async function download(url) {

    try{
    const response = await fetch(url);
    const buffer = await response.buffer();
    return buffer    
    }catch{
        return null
    }
      
}

module.exports = download