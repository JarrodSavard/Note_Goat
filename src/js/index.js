const className = document.querySelector(".class-name-text");
const noteText = document.querySelector(".note-text");
const createNoteBtn = document.querySelector(".create-note-btn");
const clearNoteBtn = document.querySelector(".clear-note-btn");

function keyUpListener() {
  className.addEventListener("keyup", () => {
    localStorage.setItem("class", className.value);
  });
  noteText.addEventListener("keyup", () => {
    localStorage.setItem("textContent", noteText.value);
  });
}

function reloadLastNote() {
  const classNameValue = localStorage.getItem("class");
  const textContentValue = localStorage.getItem("textContent");

  className.value = classNameValue;
  noteText.value = textContentValue;
}

function clearNote() {
  clearNoteBtn.addEventListener("click", () => {
    localStorage.setItem("class", "");
    localStorage.setItem("textContent", "");
  });
}

const events = () => {
  keyUpListener();
  reloadLastNote();
  clearNote();
};

events();
