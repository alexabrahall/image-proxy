import got from 'got'


//download image and return its buffer
export default async function download(url) {

    try{
    const response = await got(url,{
        headers:{
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36'
        },
        http2: true,
    });
    const buffer = response.rawBody
    return buffer    
    }catch(e){
        console.log(e)
        return null
    }
      
}
export {
    download
}