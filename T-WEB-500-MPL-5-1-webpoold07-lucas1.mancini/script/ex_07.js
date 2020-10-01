(function () {

    
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

let footer = document.querySelector("footer");
let Div = footer.getElementsByTagName("div")[1];
let buttons = Div.getElementsByTagName("button");
let but1 = buttons[0];
let but2 = buttons[1];
let but3 = buttons[2];

// the triangle
context.beginPath();
context.moveTo(6, 6);
context.lineTo(14, 10);
context.lineTo(6, 14);
context.closePath();

// the outline
context.lineWidth = 1;

// the fill color
context.fillStyle = "white";
context.fill();


var audio = new Audio('https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3');

canvas.onclick = function() {
    audio.muted=false;
audio.play();
}


but1.onclick = function() {
    audio.pause();
}

but2.onclick = function() {

    audio.pause();
    audio.currentTime = 0;
    
}

but3.onclick = function() {
    if (audio.muted==false)
    {
        audio.muted=true;
    }
    
    else
    {
        audio.muted=false;
    }
    
}




}

)()
