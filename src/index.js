import nav from "./nav";
import { top, bottom } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-style";

const button = makeButton("Yay! A Button!");
document.body.appendChild(button);

console.log(nav, top, bottom, makeColorStyle("cyan"));
