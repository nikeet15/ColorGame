
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

function pickrandom()
{
	var r= Math.floor(Math.random()*colors.length);
	return colors[r];
}

var sqr = document.querySelectorAll(".square");
var pickedColor = pickrandom();
var colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < sqr.length; i++){
	// add initial colors to squares
	sqr[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	sqr[i].addEventListener("click", function() 
	{
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) 
		{
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

