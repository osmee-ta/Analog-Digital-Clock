let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let digitalClock = document.getElementById("digitalClock");
let themeToggle = document.getElementById("themeToggle");
let themeLabel = document.getElementById("themeLabel");

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Analog Clock
    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

    // Digital Clock
    let hStr = hh < 10 ? `0${hh}` : hh;
    let mStr = mm < 10 ? `0${mm}` : mm;
    let sStr = ss < 10 ? `0${ss}` : ss;

    digitalClock.textContent = `${hStr}:${mStr}:${sStr}`;
}

setInterval(displayTime, 1000);
displayTime();

// Toggle Day/Night Mode
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        themeLabel.textContent = "Light Mode";
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        themeLabel.textContent = "Dark Mode";
    }
});
