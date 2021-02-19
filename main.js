var canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("keydown", draw_logo);

function draw_logo(e) {
    LogoX = e.clientX - canvas.offsetLeft;
	LogoY = e.clientY - canvas.offsetTop;
    Logo_structure(LogoX, LogoY);
}
function Logo_structure(LogoX, LogoY) {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(200, 200, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(250, 200, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(300, 200, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(225, 300, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(275, 300, 40, 0, 2 * Math.PI);
    ctx.stroke();
}