// Mobile menu
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
if(toggle){
toggle.onclick = ()=> nav.classList.toggle("active");
}

// Dark / Light mode
const themeBtn = document.getElementById("theme-toggle");
if(themeBtn){
if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light");
themeBtn.textContent="☀️";
}
themeBtn.onclick=()=>{
document.body.classList.toggle("light");
if(document.body.classList.contains("light")){
localStorage.setItem("theme","light");
themeBtn.textContent="☀️";
}else{
localStorage.setItem("theme","dark");
themeBtn.textContent="🌙";
}
}
}

// FPS Chart
const ctx=document.getElementById("fpsChart");
if(ctx){
new Chart(ctx,{
type:"bar",
data:{
labels:["RX 570","GTX 1650","Intel HD 4600"],
datasets:[{label:"Average FPS (GTA V Low)",data:[65,55,25]}]
},
options:{responsive:true,scales:{y:{beginAtZero:true}}}
});
}
