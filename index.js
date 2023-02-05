const img = document.getElementById("img");
const range = document.getElementById("range");
function rotateImage() {
  const rangeValue = range.value;
  img.style.transform = `rotate(${rangeValue}deg)`;
}
range.addEventListener("change", rotateImage);
