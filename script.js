const MESSAGE =
  "Thank you. This website was created by Lorenzo Alibrandi";

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(MESSAGE);
  });
