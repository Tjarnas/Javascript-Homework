
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const songName = document.querySelector(".songname")
const artist = document.querySelector(".artist")
const runTime = document.querySelector(".runtime")

btn.addEventListener("click", function (event) {
    const newSong = document.createElement("li");
    list.appendChild(newSong);
    newSong.innerHTML = `${songName.value} by ${artist.value} (${runTime.value})`;
    const removeBtn = document.createElement("button");
    newSong.appendChild(removeBtn);
    removeBtn.innerHTML = "Remove";
    removeBtn.addEventListener("click", function (event) {
        newSong.remove();
    });
});