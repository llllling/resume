import { Photo } from "./Photo.js";

export class Browser {
  photoSize = 400;
  constructor() {
    this.canvas = this.initCanvas();
    this.canvas.addEventListener("mousedown", this.onMousedown);

    this.photo = new Photo(this.canvas);

    this.resetBtn = document.getElementsByClassName("reset")[0];
  }

  initCanvas() {
    const canvas = document.getElementsByTagName("canvas")[0];
    canvas.width = this.photoSize;
    canvas.height = this.photoSize;
    canvas.style.width = this.photoSize + "px";
    canvas.style.height = this.photoSize + "px";

    return canvas;
  }

  onMousedown = (e) => {
    this.canvas.addEventListener("mousemove", this.onMouseMove);

    this.canvas.addEventListener("mouseup", this.onMouseUp);
    window.addEventListener("mouseup", this.onMouseUp);

    //이벤트 함수는 내부적으로 this가 해당 엘리먼트로 바뀜
    this.resetBtn.addEventListener(
      "click",
      this.photo.drawImage.bind(this.photo)
    );

    this.photo.initPosition(e);
  };

  onMouseUp = () => {
    this.canvas.removeEventListener("mousemove", this.onMouseMove);

    this.canvas.removeEventListener("mouseup", this.onMouseUp);
    window.removeEventListener("mouseup", this.onMouseUp);

    this.canvas.removeEventListener("mouseleave", this.onMouseUp);

    this.resetBtn.removeEventListener(
      "click",
      this.photo.drawImage.bind(this.photo)
    );
  };

  onMouseMove = (e) => {
    this.photo.drawCircles(e);
  };
}
