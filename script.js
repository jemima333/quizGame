
const messageDisplay = document.getElementById('message');
const quiz = {
    francais:[
         {
        question:"quel est le feminin de acteur?",
        answers:["acteure","actrice","acteuse","acteurr"],
        correct:1
         },
            {
        question:" où est le verbe?",
        answers:["bleu","mourir","banane","balthazar"],
        correct:1
         },
          {
        question:" (s'est) se place devant?",
        answers:["sujet"," nom","  participe passé"," verbe"],
        correct:2
         },
          {
        question:"quel est le diminitifs de garcon?",
        answers:["negro","reuf","gars","garconnet"],
        correct:3
         },
          {
        question:"le cris du serpent?",
        answers:["bele","siffle","rugit","miaule"],
        correct:1
         }
    ],
     math:[
         
            {
        question:"5*5?",
        answers:["10","20","25","30"],
        correct:2
         },
          {
        question:"ppcm de 8 et 12?",
        answers:["20","64","18","24"],
        correct:3
         },
          {
        question:"le paralelograme a combien de dimension?",
        answers:["2","4","6","3"],
        correct:0
         },
          {
        question:"11²?",
        answers:["123","123","121","122"],
        correct:2
         },
          {
        question:"quel est le nombre premier?",
        answers:["2","4","8","12"],
        correct:0
         }                              
     ],
     culture:[
         {
        question:"quel est la supérficie de la terre?",
        answers:["600.285.000km²","12.742km²","510.000.000 km²","400.000.000km²"],
        correct:2
         },
          {
        question:"l'afrique a combien de pays?",
        answers:["51","52","56","54"],
        correct:3
         },
          {
        question:"la banane se reproduit par?",
        answers:["greffage","bouture","rejet","noyau"],
        correct:2
         },
          {
        question:"la colonne vertebrale contient combien de vertèbre?",
        answers:["23","33","43","53"],
        correct:1
         },
          {
        question:"la polinnisation est?",
        answers:["transport du pollen","creation du pollen","germination du pollen","fecondation du pollen"],
        correct:0
         }
    ],
     religion:[
            {
        question:" il y a combien de livre dans la bible?",
        answers:["66","70","40","80"],
        correct:0
         },
          {
        question:"le peuple d'Israel a fait combien des fois le tour de géricho le dernier jour?",
        answers:["7 fois","5 fois","10 fois","8fois"],
        correct:0
         },
          {
        question:"l'arme utilisée par david contre goliath était?",
        answers:[" une pierre"," une lance"," une épée","un arc"],
        correct:1
         },
          {
        question:"qui a succedé moise?",
        answers:["manassé","josué","rubin","joseph"],
        correct:1
         },
          {
        question:" combien de personnes étaint sur l'arche de noé?",
        answers:["90","7","133","8"],
        correct:3
         }
    ]
};

let currentCategory = [];
let currentQuestion = 0;
let nextBtn = document.getElementById('nextBtn');
const timerDisplay = document.getElementById('timer');
 let timeLeft;
let countdown;
  

function startTimer(){ 
 let timeLeft = 10;
 timerDisplay.textContent = `temps restant : ${timeLeft}s `;
 clearInterval(countdown);
 countdown = setInterval(() => { 
    timeLeft--;
    timerDisplay.textContent = `temps restant : ${timeLeft}s`
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerDisplay.textContent = `temps restant : 0s`;

        
        Array.from(document.getElementById("quizBox").querySelectorAll('button')).forEach(b => b.disabled = true);
        nextBtn.disabled = true;
        messageDisplay.textContent = "vous avez perdu !";

    }
 },1000);

 }
 



function startQuiz(category){ 
console.log("tu as cliqué sur :",category);
currentCategory = quiz[category];
 currentQuestion = 0;
 document.querySelector(".category").style.display = "none";
 document.querySelector(".quiz-box").style.display = "flex";
 startTimer();
showQuestion ();
  }





 function showQuestion(){   
    if (!currentCategory || currentCategory.length === 0) return; 
document.getElementById("question").innerText = currentCategory[currentQuestion].question;
const options = document.querySelectorAll("#answers .option");
currentCategory[currentQuestion].answers.forEach((answer, index)=>{
    if (options[index]) {
     options[index].innerText = answer;
     options[index].style.display = "block";
     options[index].disabled = false;
     options[index].style.backgroundColor = "" ;  
    }
});
messageDisplay.textContent = "";

startTimer();

 }




let score = 0;
function selectAnswer(index){
    const options = document.querySelectorAll("#answers .option");
    const correct = currentCategory[currentQuestion].correct;
    options.forEach((btn, i) => {
        btn.disabled = true ;
    if(i === correct) btn.classList.add("correct");
if (i === index && i !== correct) btn.classList.add("wrong");
});
 if (index === correct) score++;
 document.getElementById("score").innerText = `score: ${score}`;
 nextBtn.style.display = "block";
}
document.querySelectorAll("#answers .option").forEach((btn,index)=>{
    btn.addEventListener('click', ()=> selectAnswer(index));
});




nextBtn.addEventListener('click', () => { 
    clearInterval(countdown); 
    currentQuestion++;
if (currentQuestion >= currentCategory.length ) {
    document.getElementById('quizBox').innerHTML = ` <h2>Fin du quiz !</h2>
   <p>ton score : ${score} / ${currentCategory.length}</p>`;
      
}else{
  document.querySelectorAll("#answers .option").forEach(btn =>{
    btn.classList.remove("correct" ,"wrong")
  })
    showQuestion();
}
});




 

