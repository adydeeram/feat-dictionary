const http = new Httprequest;
const ui = new UI;


// deboucing 

const debouce = (fn,delay)=>{
  
    let timeoutID;  
    return function(...args){
    if(timeoutID){
      clearTimeout(timeoutID)
    }
    timeoutID = setTimeout(()=>{
        fn(...args)
      },delay)
    }
  }







const inputFeild =  document.getElementById('search')

inputFeild.addEventListener('keyup',debouce(e => {
    
    const userText = e.target.value;

    if(userText !== ''){
        // console.log(userText)
        http.getWord(userText)
        .then((data) => {

        // console.log("🚀 ~ file: app.js ~ line 14 ~ .then ~ data", data)
        if(data.title === 'No Definitions Found'){

                // alert


        }else{
            // show profile 
            ui.showWord(data)
            document.getElementById('word').innerText = userText
            document.getElementById('maindiv').style.opacity = '1'

           
        }
            
        })
    }else if(userText == '') {
        // clear prfile 
       ui.clearData()
    }

    

    
    




    
},900))


