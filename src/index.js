import nav from "./nav";
import { footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-style";
import makeImage from "./image";
import css from "./footer.css";
import buttonStyles from "./button.css";

import imageUrl from "./webpack-logo.jpg";

const image = makeImage(imageUrl);
const button = makeButton("Yay! A Button!");
button.style = makeColorStyle("cyan");

document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);
