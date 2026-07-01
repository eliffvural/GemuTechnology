export const splitPadding = () => {
  const addPaddingLeft = () => {
    const target = document.getElementById("paddingLeft");
    const container = document.getElementById("paddingLeftContainer");

    if (target && container) {
      target.style.paddingLeft = `${(window.innerWidth - container.offsetWidth) / 2}px`;
    }
  };

  const addPaddingRight = () => {
    const target = document.getElementById("paddingRight");
    const container = document.getElementById("paddingRightContainer");

    if (target && container) {
      target.style.paddingRight = `${(window.innerWidth - container.offsetWidth) / 2}px`;
    }
  };

  addPaddingLeft();
  addPaddingRight();
  window.addEventListener("resize", addPaddingLeft);
  window.addEventListener("resize", addPaddingRight);
};
