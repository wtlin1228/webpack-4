import nav from "./nav";
// import * as GSAP from "gsap";
const getGSAP = () => import("gsap");
// import { footer } from "./footer";
const getFooter = () => import(/* webpackChunkName: "footer" */ "./footer");
const getLodashUniq = () => import("lodash-es/uniq");
import makeButton from "./button";
import { makeColorStyle } from "./button-style";
import makeImage from "./image";
import css from "./footer.css";
import buttonStyles from "./button.css";
import imageUrl from "./webpack-logo.jpg";

// const setButtonStyle = (color) => import(`./button-styles/${color}`);
if (process.env.NODE_ENV === "development") {
  var setButtonStyle = (color) =>
    import(
      /* webpackChunkName: "button-styles" */
      /* webpackMode: "lazy-once" */
      `./button-styles/${color}.js`
    );
} else {
  var setButtonStyle = (color) =>
    import(
      /* webpackChunkName: "button-styles" */
      `./button-styles/${color}.js`
    );
}

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

  setButtonStyle("red").then((styleStr) => {
    button.style = styleStr.default;
  });
});

document.body.appendChild(image);
