var colors = [];
var sqr = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var jumbo= document.querySelector(".jumbotron");
var new_color= document.querySelector("#new_color");
var stripe= document.querySelector("#stripe");
var easybtn= document.querySelector("#easy");
var hardbtn= document.querySelector("#hard");
var pickedColor;
var level= 6;

//functions..........................................................
function pickrandom(x)
{	// picks a random integer
	var r= Math.floor(Math.random()*x);
	return r;
}

function color_chooser(x)
{
	//makes chooses random colors
	for (var i = 0; i < x; i++) 
	{
		var a= pickrandom(256);
		var b= pickrandom(256);
		var c= pickrandom(256);

		colors[i]= "rgb("+a+", "+b+", "+c+")";
		console.log(colors[i]);
	}
}

function setcolor(x)
{
	// add initial colors to squares
	color_chooser(x);

	// set color code to guess
	pickedColor = colors[pickrandom(level)];
	colorDisplay.textContent = pickedColor;

	// make stripe message blank
	stripe.textContent= "";

	// reset background color of jumbotron
	jumbo.style.background= "steelblue"

	for(var i = 0; i < sqr.length; i++)
		sqr[i].style.backgroundColor = colors[i];
}

function buttoncolor()
{

	new_color.classList.toggle("buttoncolor")
}

function chg_button()
{
	for (var i = 0; i < 6; i++) 
		sqr[i].classList.remove("fade");
}

function levelEasy()
{
	level= 3;
	easybtn.classList.add("buttoncolor");
	hard.classList.remove("buttoncolor");
	chg_button();
	sqr[3].classList.add("fade");
	sqr[4].classList.add("fade");
	sqr[5].classList.add("fade");
	setcolor(level);
}

function levelHard()
{
	level= 6;
	hardbtn.classList.add("buttoncolor");
	easybtn.classList.remove("buttoncolor");
	chg_button();
	sqr[3].classList.remove("fade");
	sqr[4].classList.remove("fade");
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
			console.log(clickedColor+" "+pickedColor);
			for(var j=0; j<level; j++)
			{
				sqr[j].classList.remove("fade");
				sqr[j].style.backgroundColor= clickedColor;
				stripe.textContent= "Correct"
				new_color.textContent= "PLAY AGAIN?"
			}

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
		if(level==3)
			levelEasy();

		else
			levelHard();
	});
new_color.addEventListener("mouseover",buttoncolor);
new_color.addEventListener("mouseout",buttoncolor);
easybtn.addEventListener("click",levelEasy);
hardbtn.addEventListener("click",levelHard);

