import { Photo } from "./photo.js";
import { Copy } from "./copy.js";

export class App {
  constructor() {
    this.photo = new Photo();
    this.copy = new Copy();

    this.nudake = document.querySelector(".canvas_bg");
    this.resetBtn = document.querySelector(".reset");
  }
  init() {
    this.nudake.addEventListener("mousedown", this.onMousedown.bind(this));
  }

  onMousedown(e) {
    this.nudake.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.nudake.addEventListener("mouseup", this.onMouseUp.bind(this));
    window.addEventListener("mouseup", this.onMouseUp.bind(this));
    //이벤트 함수는 내부적으로 this가 해당 엘리먼트로 바뀜
    this.resetBtn.addEventListener(
      "click",
      this.photo.drawImage.bind(this.photo)
    );
    this.photo.initPosition(e);
  }

  onMouseUp() {
    this.nudake.removeEventListener("mousemove", this.onMouseMove.bind(this));
    this.nudake.removeEventListener("mouseup", this.onMouseUp.bind(this));
    window.removeEventListener("mouseup", this.onMouseUp.bind(this));
    this.nudake.removeEventListener("mouseleave", this.onMouseUp.bind(this));
    this.resetBtn.removeEventListener(
      "click",
      this.photo.drawImage.bind(this.photo)
    );
  }

  onMouseMove(e) {
    this.photo.drawCircles(e);
  }
}
