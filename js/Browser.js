import { Photo } from "./Photo.js";

export class Browser {
  photoSize = 500;
  constructor() {
    document.getElementsByClassName("bgimg")[0].style.display = "block";
    document.getElementsByClassName("reset")[0].style.visibility = "visible";

    this.canvas = this.createCanvas();
    this.canvas.addEventListener("mousedown", this.onMousedown);

    this.photo = new Photo(this.canvas);

    this.resetBtn = document.getElementsByClassName("reset")[0];
  }

  createCanvas() {
    const canvas = document.createElement("canvas");
    canvas.width = this.photoSize;
    canvas.height = this.photoSize;
    canvas.style.width = this.photoSize + "px";
    canvas.style.height = this.photoSize + "px";

    document.getElementsByClassName("canvas_bg")[0].appendChild(canvas);

    return canvas;
  }

  onMousedown = (e) => {
    this.canvas.addEventListener("mousemove", this.onMouseMove);

    this.canvas.addEventListener("mouseup", this.onMouseUp);
    window.addEventListener("mouseup", this.onMouseUp);

    //?´ë²¤íŠ¸ ?•¨?ˆ˜?Š” ?‚´ë¶?? ?œ¼ë¡? thisê°? ?•´?‹¹ ?—˜ë¦¬ë¨¼?Š¸ë¡? ë°”ë??
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
