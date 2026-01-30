document.querySelectorAll(".habilidades").forEach(li => {
    const desc = li.querySelector("p");

    const alturaFechada = 20;
    desc.style.display = "none";

    li.addEventListener("mouseenter", () => {
      desc.style.display = "block";

      const alturaAberta = 100;
      li.style.height = alturaFechada + "px";

      requestAnimationFrame(() => {
        li.style.height = alturaAberta + "%";
      });
    });

    li.addEventListener("mouseleave", () => {
      li.style.height = alturaFechada + "px";

      li.addEventListener("transitionend", function handler() {
        desc.style.display = "none";
        li.style.height = "";
        li.removeEventListener("transitionend", handler);
      });
    });
  });