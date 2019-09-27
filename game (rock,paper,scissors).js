var button1 = document.createElement('button');
var button2 = document.createElement('button');
var button3 = document.createElement('button');

var body = document.querySelector('body');
var container = document.createElement('div');
var container2 = document.createElement("div");
var h2 = document.createElement('h2')
var h1 = document.createElement('h1')
var result = document.createElement('h2')
var finalResult = document.createElement("h1")

button2.textContent = 'Paper';
button1.textContent = 'Rock';
button3.textContent = 'Scissors'
h2.textContent = `let's play rock paper and scissors! What do you select?`
h1.textContent = "result"
finalResult.textContent = ""

body.style.cssText = 'text-align: center; padding-top: 50px; background: linear-gradient(to right,rgb(210,120,235),rgb(255,159,75))';
button2.style.cssText = "width:120px;height:70px;border:0px solid #34495e;border-radius: 50px;position:absolute;transition:all .5s ease;z-index:1;font-family:arial;font-size:22px;position:relative;margin:20px"
button1.style.cssText = "width:130px;height:70px;border:0px solid #34495e;border-radius: 50px;position:absolute;transition:all .5s ease;z-index:1;font-family:arial;font-size:22px;position:relative;margin:20px"
button3.style.cssText = "width:130px;height:70px;border:0px solid #34495e;border-radius: 50px;position:absolute;transition:all .5s ease;z-index:1;font-family:arial;font-size:22px;position:relative;margin:20px"
container2.style.cssText = "padding:50px; line-height: 300%"
finalResult.style.cssText = "text-align: center;font-size: 90px;font-family: Righteous; line-height: 90px"

container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);
container2.appendChild(h2)
container2.appendChild(h1)
container2.appendChild(result);
container2.appendChild(finalResult);

body.appendChild(container);
body.appendChild(container2)

var buttonRock = document.querySelectorAll("button")[0];
var buttonPaper = document.querySelectorAll("button")[1];
var buttonScissors = document.querySelectorAll("button")[2];

// javascript logic

var draw  = "Draw";
var Rock  = "Rock"; 
var Paper = "Paper";
var Scissors = "Scissors"

var playerResult = 0;
var computerResult = 0;

function computerPlay() {
	var option = ['Rock', 'Paper', 'Scissors'];
    var computerSelect = option[Math.floor(Math.random() * option.length)]
    return computerSelect
}

function win(){
	playerResult++
	gameOfFive()
 	return "playerWin"
}

function lose(){
	computerResult++
	gameOfFive()
	return "You Lose! Paper beats Rock"
}

function gameOfFive(){
	if (playerResult >= 6 || computerResult >= 6 ){
		playerResult = 0;
		computerResult = 0;
	}

	if (playerResult === 5){
		finalResult.innerHTML = "You won!!! Congratulations";
	} else if (computerResult === 5) {
		finalResult.innerHTML = "You lose!!! Better luck next time";
	} else {
		finalResult.innerHTML = "";
	}
}

function letsPlay(playerSelected){
	var playerSelect = playerSelected;
	var computerSelect = computerPlay();

    if (playerSelect == computerSelect){
 		h1.innerHTML = draw;
 	} else if(playerSelect == Rock){
 		h1.innerHTML = computerSelect == Scissors? win() : lose();
 	} else if(playerSelect == Paper){
 		h1.innerHTML = computerSelect == Rock? win() : lose();
 	} else if(playerSelect == Scissors){
 		h1.innerHTML = computerSelect == Paper? win() : lose();
 	} 

	result.textContent = "Player : " + playerResult + " || computer : " + computerResult;
}

function game(){
	buttonRock.addEventListener('click',function(){
		letsPlay("Rock")
	})

	buttonPaper.addEventListener('click',function(){
		letsPlay("Paper")
	})

	buttonScissors.addEventListener('click',function(){
		letsPlay("Scissors")
	})
}

game()


