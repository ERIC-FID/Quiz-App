

let password  = null;

async function loadpass() {
  try{
    const  response = await fetch('pass.json');
    const  data =  await response.json();
    password = data;
  }
  catch(error){
    console.error("not yet ready");
  }
  
}

loadpass().then(() => {

 const Submit = document.getElementById("submit");
 Submit.addEventListener("click", function(event){
    event.preventDefault()
    let mess = document.getElementById("message");

    

    const  Enterpass = document.getElementById("pin").value;
    if ( Enterpass === password[0]){
      
          mess.textContent = "Success";
          mess.className = "success"

          sessionStorage.setItem("authenticated","true");
       
      setTimeout(function open(){
        const Name = document.getElementById("name").value;
        sessionStorage.setItem("Name",Name);
        window.location.href = "notice.html";
      },1000);

    }
    else {
         mess.textContent = "Invalid Pin"; 
         mess.className = "error"

         setTimeout(() => {
          mess.textContent = "" ;

         }, 1000)

    }


 })

})



