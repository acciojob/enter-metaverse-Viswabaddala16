//your JS code here. If required.
const status = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function() {
    status.textContent = "Entered Metaverse";
    status.style.fontSize = "24px"; // You can adjust the font size as needed
});
