document.addEventListener("DOMContentLoaded", function () {
  const whatsappButtons = document.querySelectorAll(".js-whatsapp-button");
  const whatsappNumber = "5513982081909";

  whatsappButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const message =
        button.getAttribute("data-whatsapp-message") ||
        "Olá! Vim pelo site da Nortex Digital e quero saber mais.";
      const url =
        "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

      window.open(url, "_blank", "noopener,noreferrer");
    });
  });
});
