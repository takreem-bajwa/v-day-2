const btn = document.getElementById("noBtn");

btn.addEventListener("mouseover",movebutton);

function movebutton(){
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    // console.log(x);
    // console.log(y);
    btn.style.position = "absolute";
    btn.style.transition = "left 0.4s ease, top 0.4s ease";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
    
}   


