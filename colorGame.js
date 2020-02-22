var colors = generateColor(6);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colordisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++)
{
    squares[i].style.background=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor=this.style.background;
        if(clickedcolor===pickedColor) {
            messageDisplay.textContent="Correct";
            changeColor(clickedcolor);
            h1.style.background=clickedcolor;
        }
        else {
            this.style.background="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}

function changeColor(color) {
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateColor(num) {
    var arr=[]
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor())

    }
    return arr;
}

function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")"; 
}