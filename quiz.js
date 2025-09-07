function toggleTheme() {
    document.body.classList.toggle('light');
}
function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
    }
    let options = button.parentElement.querySelectorAll("button");
    options.forEach(btn => btn.classList.add("disabled"));
}
  