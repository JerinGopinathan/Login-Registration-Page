let register_btn = document.querySelector(".Register-btn");
let login_btn = document.querySelector(".Login-btn");
let form = document.querySelector(".Form-box");
let message_box = document.querySelector(".message-box");

register_btn.addEventListener("click", () => {
  form.classList.add("change-form");
});

login_btn.addEventListener("click", () => {
  form.classList.remove("change-form");
});

document.querySelector(".Register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.remove("change-form");
  message_box.style.display = "block";
  
});
