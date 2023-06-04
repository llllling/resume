import { Photo } from "./photo.js";

export class App {
  constructor() {
    this.photo = new Photo();

    this.nudake = document.querySelector(".canvas_bg");
    this.resetBtn = document.querySelector(".reset");
  }
  init() {
    this.nudake.addEventListener("mousedown", this.onMousedown);
  }

  onMousedown = (e) => {
    this.nudake.addEventListener("mousemove", this.onMouseMove);
    this.nudake.addEventListener("mouseup", this.onMouseUp);
    window.addEventListener("mouseup", this.onMouseUp);
    //이벤트 함수는 내부적으로 this가 해당 엘리먼트로 바뀜
    this.resetBtn.addEventListener(
      "click",
      this.photo.drawImage.bind(this.photo)
    );
    this.photo.initPosition(e);
  };

  onMouseUp = () => {
    this.nudake.removeEventListener("mousemove", this.onMouseMove);
    this.nudake.removeEventListener("mouseup", this.onMouseUp);
    window.removeEventListener("mouseup", this.onMouseUp);
    this.nudake.removeEventListener("mouseleave", this.onMouseUp);
    this.resetBtn.removeEventListener(
      "click",
      this.photo.drawImage.bind(this.photo)
    );
  };

  onMouseMove = (e) => {
    this.photo.drawCircles(e);
  };
}
