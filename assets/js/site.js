function handleImageError(image) {
  image.hidden = true;
  image.parentElement.classList.add("is-placeholder");
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const waitlistForm = document.querySelector("[data-waitlist-form]");

if (waitlistForm) {
  waitlistForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = waitlistForm.querySelector(".form-status");
    status.textContent =
      "E-posta sistemi bir sonraki aşamada bağlanacak. Şimdilik Instagram’dan “REHBER” yazarak listeye katılabilirsin.";
  });
}
