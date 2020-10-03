
//defining variables..
var colors = [];
var sqr = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var jumbo= document.querySelector(".jumbotron");
var new_color= document.querySelector("#new_color");
var stripe= document.querySelector("#stripe");
var easybtn= document.querySelector("#easy");
var hardbtn= document.querySelector("#hard");
var mediumbtn = document.querySelector('#medium');
var pickedColor;
var level= 6;
var easySquare = [1, 4];
var mediumSquare = [0, 1, 3, 4];
var hardSquare = [0, 1, 2, 3, 4, 5];

//functions..........................................................
function pickrandom(x)
{	// picks a random integer
	var r= Math.floor(Math.random()*x);
	return r;
}

function color_chooser(x)
{
	//chooses random colors
	for (var i = 0; i < x; i++) 
	{
		var a= pickrandom(256);
		var b= pickrandom(256);
		var c= pickrandom(256);

		colors[i]= "rgb("+a+", "+b+", "+c+")";
	//	console.log(colors[i]);
	}
}

function setcolor(x)
{
	// add initial colors to squares
	color_chooser(x);

	// set color code to guess
	pickedColor = colors[pickrandom(level)];
	//console.log(pickedColor);
	colorDisplay.textContent = pickedColor;

	// set initial texts
	stripe.textContent= "Try less moves";
	new_color.textContent="NEW COLORS";

	// reset background color of jumbotron
	jumbo.style.background= "steelblue"

	if(x == 2){
		for(var i=0; i<x; i++)
			sqr[easySquare[i]].style.backgroundColor = colors[i];
	}
	else if(x == 4){
		for(var i=0; i<x; i++)
			sqr[mediumSquare[i]].style.backgroundColor = colors[i];
	}
	if(x == 6){
		for(var i=0; i<x; i++)
			sqr[hardSquare[i]].style.backgroundColor = colors[i];
	}
}

function buttoncolor()
{
	new_color.classList.toggle("buttoncolor");
}

function chg_button()
{
	for (var i = 0; i < 6; i++) 
		sqr[i].classList.remove("fade");
}

function levelEasy()
{
	level= 2;
	easybtn.classList.add("buttoncolor");
	mediumbtn.classList.remove("buttoncolor");
	hardbtn.classList.remove("buttoncolor");
	chg_button();
	sqr[0].classList.add("fade");
	sqr[3].classList.add("fade");
	sqr[2].classList.add("fade");
	sqr[5].classList.add("fade");
	setcolor(level);
}

function levelMedium()
{
	level = 4;
	mediumbtn.classList.add("buttoncolor");
	easybtn.classList.remove("buttoncolor");
	hardbtn.classList.remove("buttoncolor");
	chg_button();
	sqr[2].classList.add("fade");
	sqr[5].classList.add("fade");
	setcolor(level);
}

function levelHard()
{
	level= 6;
	hardbtn.classList.add("buttoncolor");
	easybtn.classList.remove("buttoncolor");
	mediumbtn.classList.remove("buttoncolor");
	chg_button();
	sqr[0].classList.remove("fade");
	sqr[3].classList.remove("fade");
	sqr[2].classList.remove("fade");
	sqr[5].classList.remove("fade");	
	setcolor(level);
}

//......................................................................

//initially hard level
setcolor(6);
hardbtn.classList.add("buttoncolor");

for(var i = 0; i < sqr.length; i++)
{
	//add click listeners to squares
	sqr[i].addEventListener("click", function() 
	{
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor) 
		{
			console.log(clickedColor+" == "+pickedColor);
			
			stripe.textContent= "Correct"
			new_color.textContent= "PLAY AGAIN?"

			if(level == 2){
				for(var i=0; i<level ; i++){
					sqr[easySquare[i]].style.backgroundColor = clickedColor;
					sqr[easySquare[i]].classList.remove("fade");
				}
			}
			else if(level == 4){
				for(var i=0; i<level; i++){
					sqr[mediumSquare[i]].style.backgroundColor = clickedColor;
					sqr[mediumSquare[i]].classList.remove("fade");
				}
					
			}
			else {
				for(var i=0; i<level; i++){
					sqr[hardSquare[i]].style.backgroundColor = clickedColor;
					sqr[hardSquare[i]].classList.remove("fade");
				}
					
			}

			/*for(var j=0; j<level; j++)
			{
				sqr[j].classList.remove("fade");
				sqr[j].style.backgroundColor= clickedColor;	
			}*/

			//change jumbo background to correct color
			jumbo.style.backgroundColor= clickedColor;
		}
		
		else 
		{	
			this.classList.add("fade");
			stripe.textContent= "Try Again";
		}
	});
}

new_color.addEventListener("click",function()
	{
		if(level==2)
			levelEasy();
		else if(level==4)
			levelMedium();
		else
			levelHard();
	});

new_color.addEventListener("mouseover",buttoncolor);
new_color.addEventListener("mouseout",buttoncolor);
easybtn.addEventListener("click",levelEasy);
hardbtn.addEventListener("click",levelHard);
mediumbtn.addEventListener("click",levelMedium);

