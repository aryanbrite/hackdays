function countdown() {
    const now = new Date();
    const event = new Date("2026-07-25T09:00:00");
    const diff = event - now;
    const day = diff / (1000 * 60 * 60 * 24);
    const days = Math.floor(day);
    const hour = (day - days) * 24;
    const hours = Math.floor(hour);
    const min = (hour - hours) * 60;
    const mins = Math.floor(min);
    const sec = (min - mins) * 60;
    const secs = Math.floor(sec);

    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
    }
}

setInterval(countdown, 1000);
countdown();
