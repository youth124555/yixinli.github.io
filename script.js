function setLanguage(lang) {
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-en]").forEach((element) => {
    if (lang === "en") {
      element.innerHTML = element.getAttribute("data-en");
    } else {
      element.innerHTML = element.getAttribute("data-cn");
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "en";
  setLanguage(savedLanguage);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
});
