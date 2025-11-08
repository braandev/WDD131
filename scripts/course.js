document.addEventListener("DOMContentLoaded", () => {
  // Botones
  const btnAll = document.getElementById("all");
  const btnCSE = document.getElementById("cse");
  const btnWDD = document.getElementById("wdd");

  // Secciones
  const sectionAll = document.querySelector(".all");
  const sectionCSE = document.querySelector(".cse");
  const sectionWDD = document.querySelector(".wdd");

  // Span de créditos
  const totalCreditsSpan = document.getElementById("totalCredits");
  let totalCredits = 0;

  // Función para ocultar todas las secciones
  function hideAllSections() {
    sectionAll.style.display = "none";
    sectionCSE.style.display = "none";
    sectionWDD.style.display = "none";
  }

  // Mostrar ALL al inicio
  hideAllSections();
  sectionAll.style.display = "block";

  // Mostrar solo la sección correspondiente
  btnAll.addEventListener("click", () => {
    hideAllSections();
    sectionAll.style.display = "block";
  });

  btnCSE.addEventListener("click", () => {
    hideAllSections();
    sectionCSE.style.display = "block";
  });

  btnWDD.addEventListener("click", () => {
    hideAllSections();
    sectionWDD.style.display = "block";
  });

  // --- NUEVO: Manejo de créditos ---
  const allCourseDivs = document.querySelectorAll(".all div, .cse div, .wdd div");

  allCourseDivs.forEach(div => {
    div.addEventListener("click", () => {
      // alternar selección
      if (div.classList.contains("selected")) {
        div.classList.remove("selected");
        totalCredits -= 3;
      } else {
        div.classList.add("selected");
        totalCredits += 3;
      }

      // actualizar total
      totalCreditsSpan.textContent = totalCredits;
    });
  });
});
