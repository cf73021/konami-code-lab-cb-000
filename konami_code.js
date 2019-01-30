const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0
  const key = e.key
  document.body.addEventListener('keydown', onKeyDownHandler);
  if (key === alphabet([index])){
    index++;
    if (index === alphabet.length){
      alert("Done.");
      index = 0;
    }
  } else {
    index = 0;
  }

}
