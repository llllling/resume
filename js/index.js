import { isMobile, isTablet } from "./utils.js";
import { Browser } from "./Browser.js";
import { Mobile } from "./Mobile.js";

isTablet || isMobile ? new Mobile() : new Browser();
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
