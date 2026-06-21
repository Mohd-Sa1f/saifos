const wallpapers = [
    "linear-gradient(135deg,#1e3c72,#2a5298)",
    "linear-gradient(135deg,#ff512f,#dd2476)",
    "linear-gradient(135deg,#11998e,#38ef7d)",
    "linear-gradient(135deg,#8e2de2,#4a00e0)"
];

let currentWallpaper = 0;

function changeWallpaper() {
    currentWallpaper =
        (currentWallpaper + 1) % wallpapers.length;

    document.body.style.background =
        wallpapers[currentWallpaper];
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function toggleWindow(id) {
    const win = document.getElementById(id);

    if (win.style.display === "none") {
        win.style.display = "block";
    } else {
        win.style.display = "none";
    }
}

function updateClock() {
    const now = new Date();

    document.getElementById("clock").innerText =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

document.querySelectorAll(".window").forEach(win => {

    const titleBar =
        win.querySelector(".title-bar");

    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    titleBar.addEventListener("mousedown", e => {

        dragging = true;

        offsetX =
            e.clientX - win.offsetLeft;

        offsetY =
            e.clientY - win.offsetTop;
    });

    document.addEventListener("mousemove", e => {

        if (!dragging) return;

        win.style.left =
            (e.clientX - offsetX) + "px";

        win.style.top =
            (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
        dragging = false;
    });

});
