export class Copy {
  constructor() {
    this.init();
  }

  onCopy(element) {
    const text = element.innerHTML;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard...");
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  }

  init() {
    const element = document.querySelectorAll(".contact li span");
    element.forEach((e) => this.onCopy(e));
  }
}
