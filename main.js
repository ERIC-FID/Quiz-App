

let  con = null;

async function Question(){
  try{

    const response = await fetch('questions.json');
    const data = await response.json();
    con = data;
  }
  catch(error){
    console.error("Not ready yet");
  }


}

Question().then(() => {



let random = con.sort(() => Math.random() - 0.5 
);


 let  Group;
 let answer;
 let  Next;
 let Prev;
 let TotalQ = 0;
 let Qanswered;
 let Qcount = 0;
 let but;





random.forEach((element,i) => {
  const question = document.createElement("h2");
  question.textContent = element.question;
  question.style.marginBottom = "3rem";

  TotalQ += 1;
  


  answer = document.getElementById("answers");


  Group = document.createElement("div");
  Group.style.width = "100%";
  Group.style.height = "80%" ;
  Group.classList = "box";
  
  

  Group.appendChild(question);

   let Smallrand = element.options.sort(() => Math.random() - 0.5);
  
   Smallrand.forEach((elem,j) => {
    const option = document.createElement("input");
    option.type = "radio";
    option.name = element.Opname;
    option.value = elem;
    option.id = element.OpId + j;
    option.style.marginBottom = "1rem";
  



    const Label = document.createElement("label");
    Label.textContent = elem;
    Label.style.fontSize = "1.5em";
    Label.style.marginLeft = "0.5rem";
    Label.setAttribute("for", option.id);
     
    option.addEventListener("change", () => {
      Qcount = 0;
      random.forEach(q => {
        if (document.querySelector(`input[name="${q.Opname}"]:checked`)) {
          Qcount++;
        }

        if (Qcount >= All){
          but =  document.getElementById("score");
          but.style.display = "block";
  }
      });

      document.getElementById("Qans").textContent = Qcount;
    });
          
     Group.append(option,Label,document.createElement("br"))
   })

   answer.prepend(Group);
  
})

  but = document.getElementById("score");



      function handleScore (event){

      clearInterval(countdown)
      let score = 0;

      con.forEach(q => {
        let selected = document.querySelector(`input[name="${q.Opname}"]:checked`);
        if (selected && selected.value === q.answer) {
          score++;
        }

      });

      let displayy = document.getElementById("displayscore");
          displayy.style.visibility = "visible";

          let MAIN = document.querySelector("main");
          MAIN.style.background = "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))"; 

       



      document.getElementById("quiz").textContent =  `Your quiz score is ${score}`; 
      
      event.currentTarget.style.visibility = "hidden"; 
      document.getElementById("next").style.visibility = "hidden";
      document.getElementById("back").style.visibility = "hidden";
    }

    but.addEventListener("click",handleScore)

 let move = document.querySelectorAll(".box");
 let cun = 0;
  move.forEach(div => {
    div.style.display = "none";
  })

  move[cun].style.display = "block";
    
function add(){

  move[cun].style.display = "none";
   cun = (cun + 1) % move.length;
  move[cun].style.display = "block";
  document.getElementById("Qans").textContent = Qcount;

}

function back(){

  move[cun].style.display = "none";
   cun = (cun - 1 + move.length) % move.length;
  move[cun].style.display = "block";
  document.getElementById("Qans").textContent = Qcount;

}

document.getElementById("num").textContent = TotalQ;

let All = (70/100)*TotalQ;
  console.log(All)

document.getElementById("next").addEventListener("click",add);
document.getElementById("back").addEventListener("click",back);


/* setting time code */


Seconds = (12*60);
let min;
let sec;

let countdown = setInterval(() =>{

  min = Math.floor(Seconds/60);
  sec = Seconds % 60;
  
  if(sec < 10){
    sec = "0" + sec;
  }

  if (min < 10){
    min = "0" + min;
  }

  Seconds --;

  document.getElementById("time").textContent = `${min}:${sec}`;

  if (min <= 10 && sec >= 0){
  document.getElementById("time").style.color = "red";


    }


  if (min == 0 && sec == 0){
      but =  document.getElementById("score");
      but.style.visibility = "hidden";
      document.getElementById("next").style.visibility = "hidden";
      document.getElementById("back").style.visibility = "hidden";
      clearInterval(countdown);
      setTimeout( handleScore,1000);
 

  }

  
}, 1000)

  function Back(){
    window.location.href = "index.html"
  }

  document.getElementById("ok").addEventListener("click",Back)


  const Name = sessionStorage.getItem("Name");
  
  document.getElementById("user").textContent = "Dear " + Name;



 

})






 

