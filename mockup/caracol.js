function startCharcoal() {
  const caracol = document.getElementById("caracol");

  setInterval(() => {
    posCaracol = caracol.getBoundingClientRect();

    if (mouse.x != posCaracol.left) {
      direction.x += mouse.x > posCaracol.left ? 1 : -1;
    }

    if (mouse.y != posCaracol.top) {
      direction.y += mouse.y > posCaracol.top ? 1 : -1;
    }

    if (mouse.y != posCaracol.top || mouse.x != posCaracol.left) {
      caracol.style.transform =
        mouse.x > posCaracol.left ? "rotateY(3.14rad)" : "rotateY(0rad)";
    }
    caracol.style.left = `${direction.x}px`;
    caracol.style.top = `${direction.y}px`;
  }, 10);

  let mouse = { x: 0, y: 0 };
  let direction = { x: 0, y: 0 };

  addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });
}

let isActivated = false;

let pressedKeys = [];
let konamiCode =
  "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba";

addEventListener("keydown", (event) => {
  pressedKeys.push(event.key);
  pressedKeys.splice(
    -konamiCode.length - 1,
    pressedKeys.length - konamiCode.length
  );

  if (pressedKeys.join("").includes(konamiCode)) {
    if (isActivated) return;
    isActivated = true;
    startCharcoal();
  }
});
