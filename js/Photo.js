export class Photo {
  size = 400;
  constructor() {
    document.getElementsByClassName("canvas_bg")[0].style.backgroundImage =
      'url("../images/my1.jpg")';

    this.initCanvas();
    this.initImage();
  }

  initPosition(e) {
    this.prePosition = { x: e.offsetX, y: e.offsetY };
  }

  initCanvas() {
    this.canvas = document.getElementsByTagName("canvas")[0];
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    this.canvas.style.width = this.size + "px";
    this.canvas.style.height = this.size + "px";
  }

  initImage() {
    this.img = new Image();
    this.img.src = "../images/my1.jpg";
    this.img.onload = () => {
      this.drawImage();
    };
  }

  drawImage() {
    // 기본값, 대상값이 위로 ; 즉 처음 그려진 도형 위에 나중에 그려진 도형이 표시 됨
    this.ctx.globalCompositeOperation = "source-over";
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
  }

  drawCircles(e) {
    //원본 그림이 겹쳐지지 않음 부분만 ; 즉 처음에 그려진 도형에서 겹쳐지지 않는 부분만 표시 됨
    this.ctx.globalCompositeOperation = "destination-out";

    const newPosition = { x: e.offsetX, y: e.offsetY };
    const dx = Math.pow(this.prePosition.x - newPosition.x, 2);
    const dy = Math.pow(this.prePosition.y - newPosition.y, 2);
    const distance = Math.sqrt(dx + dy);
    const angle = Math.atan2(dy, dx);

    Array.from({ length: distance }, (v, i) => i + 1).forEach((index) => {
      const x = this.prePosition.x + Math.cos(angle) * index;
      const y = this.prePosition.y + Math.sin(angle) * index;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 20, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.closePath();
    });
    this.prePosition = newPosition;
  }
}
