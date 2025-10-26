const buttons = document.querySelectorAll(".tab_btn");
const contents = document.querySelectorAll(".tab_content");

buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("btn_active"));
    contents.forEach((content) => content.classList.remove("content_active"));
    button.classList.add("btn_active");
    contents[idx].classList.add("content_active");
  });
});
