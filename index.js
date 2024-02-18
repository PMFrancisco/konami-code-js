function konamiCode(callback) {
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "KeyB",
    "KeyA",
  ];

  let currentIndex = 0;

  function handleKeyPress(event) {
    if (event.code === konamiSequence[currentIndex]) {
      currentIndex++;
      if (currentIndex === konamiSequence.length) {
        callback();
        currentIndex = 0;
      }
    } else {
      currentIndex = 0;
    }
  }

  document.addEventListener("keydown", handleKeyPress);
}

module.exports = konamiCode;
