let userScore=0;
let computerScore=0;
const userScore_span=document.querySelector("#user-score");
const computerScore_span=document.querySelector("#computer-score");
const result_div=document.querySelector(".result");
const rock_div=document.querySelector("#r");
const paper_div=document.querySelector("#p");
const scissor_div=document.querySelector("#s");

function getComputerChoice()
{
    const choices=['rock','paper','scissor'];
    const randomNumber=Math.floor(Math.random()*3);
    return(choices[randomNumber]);
}

function win(userChoice,computerChoice)
{
    userScore++;
    result_div.innerHTML=userChoice +"(user)"+"    beats    " + computerChoice +"(computer)"+"    YOU WIN!!!!";
    userScore_span.innerHTML=userScore;
}
function lose(userChoice,computerChoice)
{
    computerScore++;
    result_div.innerHTML=computerChoice+"(computer)" +"    beats    " + userChoice +"(user)"+"    YOU LOSE!!!!";
    computerScore_span.innerHTML=computerScore;
}

function draw(userChoice,computerChoice)
{
    result_div.innerHTML=userChoice +"(user)"+"    and    " + computerChoice +"(computer)"+"    ARE EQUAL DRAW!!!!!!";
}


function game(userChoice)
{
    console.log(userChoice);
    let computerChoice=getComputerChoice();
    console.log(computerChoice);
    switch(userChoice+computerChoice)
    {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorscissor':
            draw(userChoice,computerChoice);
            break;

        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
            lose(userChoice,computerChoice);
            break;

        case 'paperrock':
        case 'scissorpaper':
        case 'rockscissor':
            win(userChoice,computerChoice);
            break;
    }
}
function myFunction()
{
    userScore=0;
    computerScore=0;
    computerScore_span.innerHTML=computerScore;
    userScore_span.innerHTML=userScore;
    result_div.innerHTML="USER=0     ,COMPUTER=0     LET's START";
}

function main()
{
    rock_div.addEventListener('click',function(){game("rock");});
    paper_div.addEventListener('click',function(){game("paper");});
    scissor_div.addEventListener('click',function(){game("scissor");});

}

main();