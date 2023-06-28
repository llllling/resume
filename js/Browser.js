import { Photo } from "./Photo.js";

export class Browser {
  constructor() {
    this.photo = new Photo();

    this.resetBtn = document.getElementsByClassName("reset")[0];

    this.photo.canvas.addEventListener("mousedown", this.onMousedown);
  }

  onMousedown = (e) => {
    this.photo.canvas.addEventListener("mousemove", this.onMouseMove);

    this.photo.canvas.addEventListener("mouseup", this.onMouseUp);
    window.addEventListener("mouseup", this.onMouseUp);

    //이벤트 함수는 내부적으로 this가 해당 엘리먼트로 바뀜
    this.resetBtn.addEventListener(
      "click",
      this.photo.drawImage.bind(this.photo)
    );

    this.photo.initPosition(e);
  };

  onMouseUp = () => {
    this.photo.canvas.removeEventListener("mousemove", this.onMouseMove);

    this.photo.canvas.removeEventListener("mouseup", this.onMouseUp);
    window.removeEventListener("mouseup", this.onMouseUp);

    this.photo.canvas.removeEventListener("mouseleave", this.onMouseUp);

    this.resetBtn.removeEventListener(
      "click",
      this.photo.drawImage.bind(this.photo)
    );
  };

  onMouseMove = (e) => {
    this.photo.drawCircles(e);
  };
}
