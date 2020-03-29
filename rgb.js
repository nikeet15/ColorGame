
var colors = [];
for (var i = 0; i < 6; i++) 
{
	var a= pickrandom(256);
	var b= pickrandom(256);
	var c= pickrandom(256);

	colors[i]= "rgb("+a+", "+b+", "+c+")";
	console.log(colors[i]);
}

function pickrandom(x)
{
	var r= Math.floor(Math.random()*x);
	return r;
}

var sqr = document.querySelectorAll(".square");
var pickedColor = colors[pickrandom(colors.length)];
var colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < sqr.length; i++)
	// add initial colors to squares
	sqr[i].style.backgroundColor = colors[i];

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
			}
		}
		
		else 
			this.classList.add("fade");
	});
}

