export class Photo {
  w = 320;
  h = 320;
  constructor() {
    this.prePosition = { x: 0, y: 0 };
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = this.w;
    this.canvas.height = this.h;
    this.canvas.style.width = this.w + "px";
    this.canvas.style.height = this.h + "px";
    this.drawImage();
  }

  drawImage() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const img = new Image();
    img.src = "../images/my1.jpg";
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0, this.w, this.h);
    };
  }

  drawCircles(e) {
    console.log("drawCircles", e.offsetX, e.offsetY);
    this.ctx.globalCompositeOperation = "destination-out";

    const newPosition = { x: e.offsetX, y: e.offsetY };
    const distance = this.ctx.beginPath();
    this.ctx.arc(e.offsetX, e.offsetY, 20, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  }
  checkPercent() {}
}
