let btn=document.querySelector(".btn_box");
let green=document.querySelector(".green");

let digit=document.querySelector(".digit");
let down=document.querySelector(".down");
let count=1;
let flag=0;
btn.addEventListener("click",()=>{
  
    if(flag==0)
    {
        let stop=  setInterval(() => {
            
            digit.innerHTML=`<h1>${count}%</h1>`
            
            green.style.width=`${count}%`;
            console.log(count++);

        }, 100);
        
      
        setTimeout(function(){
clearInterval(stop)
down.innerHTML="Downloaded.."
down.style.backgroundColor="green";

        },10000);
        flag=1;
    }

   
    
       

         
        

})