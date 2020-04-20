import nav from "./nav";
// import * as GSAP from "gsap";
const getGSAP = () => import("gsap");
// import { footer } from "./footer";
const getFooter = () => import("./footer");
const getLodashUniq = () => import("lodash-es/uniq");
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

button.addEventListener("click", (e) => {
  getFooter().then((footerModule) => {
    document.body.appendChild(footerModule.footer);
  });

  getGSAP().then((gsap) => console.log(gsap));

  getLodashUniq().then((uniq) => console.log(uniq));
});

document.body.appendChild(image);
