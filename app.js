const game=()=>{
  let pScore=0;
  let cScore=0;
  const match=document.querySelector(".match");
  const score=document.querySelector(".score");
  const winner=document.querySelector(".winner");
//start the Game
const startGame=()=>{
  const playBtn=document.querySelector(".intro button");
  const introScreen=document.querySelector(".intro");



playBtn.addEventListener("click",()=>{
introScreen.classList.add("fadeOut");
match.classList.add("fadeIn");
score.classList.add("fadeIn");

});


};
//play match
const playMatch=()=>{
const options=document.querySelectorAll(".options button");
const playerHand=document.querySelector(".player-hand");
const computerHand=document.querySelector(".computer-hand");
const hands=document.querySelectorAll(".hands img");

hands.forEach(hand=>{
  hand.addEventListener("animationend",()=>{
    hand.style.animation="";
  })
})



//computer option
const computerOptions=["グー","パー","チョキ"];



options.forEach(option=>{
option.addEventListener("click",()=>{
const computerNumber=Math.floor(Math.random()*3);
const computerChoice=computerOptions[computerNumber];







setTimeout(() => {
  computerHands(option.textContent,computerChoice);

  // update img
playerHand.src=`./assets/${option.textContent}.png`;
computerHand.src=`./assets/${computerChoice}.png`;
}, 2000);


playerHand.style.animation="shakePlayer 2s ease";
computerHand.style.animation="shankeComputer 2s ease";

});
});
};






const updateScore=()=>{
  const playerScore=document.querySelector(".player-score p");
  const computerScore=document.querySelector(".computer-score p");
  playerScore.textContent=pScore+"point";
  computerScore.textContent=cScore+"point";
}



const rasult=()=>{
const point_card=document.querySelector(".point-card");
const rasult=document.querySelector(".rasult");


  if(pScore==3){
    match.classList.remove("fadeIn");
score.classList.remove("fadeIn");
point_card.classList.add("fadeIn");
rasult.textContent="あなたの勝ちです。";


  }
  
  if(cScore==3){
    match.classList.remove("fadeIn");
score.classList.remove("fadeIn");
    point_card.classList.add("fadeIn");
rasult.textContent="相手の勝ちです。";
  }
}




const computerHands=(playerChoice,computerChoice)=>{


if(playerChoice===computerChoice){
  winner.textContent="引き分け";
  return;
}
if(playerChoice==="グー"){
  if(computerChoice==="チョキ"){
    winner.textContent="あなたの勝ち";
    pScore++;
    updateScore();
    rasult();
    return;
  }else{
    winner.textContent="相手の勝ち";
    cScore++;
    updateScore();
    rasult();

    return;

  }
}



if(playerChoice==="パー"){
  if(computerChoice==="チョキ"){
    winner.textContent="相手の勝ち";
    cScore++;
    updateScore();
    rasult();

    return;
  }else{
    winner.textContent="あなたの勝ち";
    pScore++;
    updateScore();
    rasult();

    return;

  }
}

if(playerChoice==="チョキ"){
  if(computerChoice==="パー"){
    winner.textContent="あなたの勝ち";
    pScore++;
    updateScore();
    rasult();

    return;
  }else{
    winner.textContent="相手の勝ち";
    cScore++;
    updateScore();
    rasult();

    return;

  }
}




}

playMatch();


//Is call all the inner function

startGame();




};

game();