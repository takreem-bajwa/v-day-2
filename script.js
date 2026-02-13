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

<script>
document.querySelectorAll('.common').forEach(box => {
    const paragraph = box.querySelector('p');
    const container = box;
    let baseFont = 16; // base font size in px

    // Set initial font size
    paragraph.style.fontSize = baseFont + 'px';

    // Function to fit text dynamically
    const fitText = () => {
        let fontSize = baseFont;
        paragraph.style.fontSize = fontSize + 'px';
        
        while(paragraph.scrollHeight > container.clientHeight - 60 && fontSize > 6){
            fontSize -= 1; // shrink until it fits
            paragraph.style.fontSize = fontSize + 'px';
        }
    };

    // Fit text on page load
    fitText();

    // Fit text again when hovered (optional for smoother effect)
    box.addEventListener('mouseenter', () => {
        fitText();
    });

    // Optional: adjust on window resize
    window.addEventListener('resize', () => {
        fitText();
    });
});
</script>



