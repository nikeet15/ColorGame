var colors = [];
var sqr = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var jumbo= document.querySelector(".jumbotron");
var new_color= document.querySelector("#new_color");
var stripe= document.querySelector("#stripe");
var pickedColor;

function pickrandom(x)
{	// picks a random integer
	var r= Math.floor(Math.random()*x);
	return r;
}

function color_chooser()
{
	//makes chooses 6 random colors
	for (var i = 0; i < 6; i++) 
	{
		var a= pickrandom(256);
		var b= pickrandom(256);
		var c= pickrandom(256);

		colors[i]= "rgb("+a+", "+b+", "+c+")";
		console.log(colors[i]);
	}
}

function setcolor()
{
	// add initial colors to squares
	color_chooser();

	// set color code to guess
	pickedColor = colors[pickrandom(colors.length)];
	colorDisplay.textContent = pickedColor;

	// make stripe message blank
	stripe.textContent= "";

	for(var i = 0; i < sqr.length; i++)
	sqr[i].style.backgroundColor = colors[i];
}

function buttoncolor(){

	new_color.classList.toggle("buttoncolor")
}

setcolor();

for(var i = 0; i < sqr.length; i++)
{
	//add click listeners to squares
	sqr[i].addEventListener("click", function() 
	{
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor) 
		{
			console.log(clickedColor+" "+pickedColor);
			for(var j=0; j<sqr.length; j++)
			{
				sqr[j].classList.remove("fade");
				sqr[j].style.backgroundColor= clickedColor;
				stripe.textContent= "Correct"
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


new_color.addEventListener("click",setcolor);
new_color.addEventListener("mouseover",buttoncolor);
new_color.addEventListener("mouseout",buttoncolor);

