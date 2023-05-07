import { Photo } from "./photo.js";
const photo = new Photo();
const nudake = document.querySelector(".canvas_bg");
const resetBtn = document.querySelector(".reset");

function onMousedown(e) {
  nudake.addEventListener("mousemove", onMouseMove);
  nudake.addEventListener("mouseup", onMouseUp);
  window.addEventListener("mouseup", onMouseUp);
  //이벤트 함수는 내부적으로 this가 해당 엘리먼트로 바뀜
  resetBtn.addEventListener("click", photo.drawImage.bind(photo));
  photo.prePosition.x = e.offsetX;
  photo.prePosition.y = e.offsetY;
}

function onMouseUp() {
  nudake.removeEventListener("mousemove", onMouseMove);
  nudake.removeEventListener("mouseup", onMouseUp);
  window.removeEventListener("mouseup", onMouseUp);
  nudake.removeEventListener("mouseleave", onMouseUp);
  resetBtn.removeEventListener("click", photo.drawImage.bind(photo));
}
function onMouseMove(e) {
  photo.drawCircles(e);
  photo.checkPercent();
}

nudake.addEventListener("mousedown", onMousedown);
