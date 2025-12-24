/* PASSWORD */
const correctPassword = "123"; // CHANGE THIS

function unlock() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    startConfetti();
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

/* SCROLL */
function scrollDown() {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
}

/* QUOTES */
const quotes = [
  "You are one of the favorite person in my life❣️.",
  "Every memory with you is precious.",
];

let i = 0;
setInterval(() => {
  document.getElementById("quote").innerText = quotes[i];
  i = (i + 1) % quotes.length;
}, 6000);

/* CONFETTI */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function startConfetti() {
  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10,
      color: "hsl(" + Math.random() * 360 + ",100%,50%)"
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    c.y += c.d / 2;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(animateConfetti);
}