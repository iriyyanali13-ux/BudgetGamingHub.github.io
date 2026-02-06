// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (menuToggle) {
  menuToggle.onclick = () => nav.classList.toggle("active");
}

// Dark / Light Mode
const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "☀️";
  }

  themeBtn.onclick = () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeBtn.textContent = isLight ? "☀️" : "🌙";
  };
}
