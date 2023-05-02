import { Photo } from "./photo.js";
const photo = new Photo();
const nudake = document.querySelector(".nudake");
const resetBtn = document.querySelector(".reset");

function onMousedown(e) {
  nudake.addEventListener("mousemove", onMouseMove);
  nudake.addEventListener("mouseup", onMouseUp);
  resetBtn.addEventListener("click", () => {
    photo.drawImage();
  });
}

function onMouseUp() {
  nudake.removeEventListener("mousemove", onMouseMove);
  nudake.removeEventListener("mouseup", onMouseUp);
  nudake.removeEventListener("mouseleave", onMouseUp);
  resetBtn.removeEventListener("click", () => {
    photo.drawImage();
  });
}
function onMouseMove(e) {
  photo.drawCircles(e);
  photo.checkPercent();
}

nudake.addEventListener("mousedown", onMousedown);
