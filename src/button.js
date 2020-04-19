// take a str, the button label and return a element
/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */
const makeButton = (buttonName) => {
  const buttonLabel = `Button: ${buttonName}`;

  const button = document.createElement("button");
  button.innerHTML = buttonLabel;

  return button;
};

export default makeButton;
