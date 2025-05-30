const targetDate = new Date("2025-07-12T11:30:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownElement.innerHTML = "🎉 Event Started!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerHTML = `
    <span>${days}<small>Days</small></span>
    <span>${hours}<small>Hrs</small></span>
    <span>${minutes}<small>Min</small></span>
    <span>${seconds}<small>Sec</small></span>
  `;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
