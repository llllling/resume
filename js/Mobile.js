export class Mobile {
  constructor() {
    document.getElementsByClassName("bgimg")[0].style.display = "none";
    document.getElementsByClassName("reset")[0].style.display = "none";
    document.getElementsByTagName("canvas")[0].style.display = "none";
    const canvasBg = document.getElementsByClassName("canvas_bg")[0];
    canvasBg.style.position = "relative";
    canvasBg.style.backgroundImage = 'url("../images/my1.jpg")';
    //canvasBg.style.backgroundSize = "400px";
  }
}
