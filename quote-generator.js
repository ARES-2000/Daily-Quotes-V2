let quote = '';
let author = '';
requestQuote();
setTimeout(()=>{
   document.querySelector('.request-new-quote').click()
},2100)
document.querySelector('.request-new-quote').addEventListener('click',()=>{
   requestQuote();
   renderQuote()
}
)
function renderQuote(){
      document.querySelector('.quote').innerText = quote;
      document.querySelector('.author').innerText = author;
}
function requestQuote(){
   fetch('https://api.api-ninjas.com/v1/quotes',{
      method:'get',
      headers:new Headers({
         "X-Api-Key":"vRsHcNdviiqQppBMFG2Thw==aFMyzTMObfnsjjOn"
   }),
      contentType:'application/json'
   
   })
   .then((r)=>{
      return r.json()
   })
   .then((data)=>{
      console.log(data[0].quote)
      setTimeout(()=>{
         quote = data[0].quote
         author = data[0].author
      },1000)
   })
   .catch((error)=>{console.error(error)})
   fetch('https://api.api-ninjas.com/v1/quotes',{
      method:'get',
      headers:new Headers({
         "X-Api-Key":"vRsHcNdviiqQppBMFG2Thw==aFMyzTMObfnsjjOn"
   }),
      contentType:'application/json'
   
   })
   .then((r)=>{
      return r.json()
   })
   .then((data)=>{
      console.log(data[0].quote)
      setTimeout(()=>{
         quote = data[0].quote
         author = data[0].author
      },1000)
   })
   .catch((error)=>{console.error(error)})
}
