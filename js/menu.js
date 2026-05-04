document.addEventListener("DOMContentLoaded", () => {

  /* ===== MENU MOBILE ===== */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {

      menu.classList.toggle("active");

      if(menu.classList.contains("active")){
        toggle.textContent = "✖";
      }else{
        toggle.textContent = "☰";
      }

    });
  }

  /* ===== ANIMAÇÃO DOS CARDS ===== */
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {

      const cardInfo = checkbox.nextElementSibling.querySelector(".card-info");

      if (!cardInfo) return;

      const titles = cardInfo.querySelectorAll("h1");

      titles.forEach((h1) => {
        h1.classList.remove("animate");
        void h1.offsetWidth;
        h1.classList.add("animate");
      });

    });
  });


  /* ===== PESQUISA ===== */
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {

    searchInput.addEventListener("keyup", () => {

      const filtro = searchInput.value.toLowerCase();
      const cards = document.querySelectorAll(".cardc");

      cards.forEach(card => {

        const nome = (card.dataset.nome || "").toLowerCase();

        if (nome.includes(filtro)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }

      });

    });

  }


  /* ===== PERSONAGEM SELECIONADO (BUILDS) ===== */

  const personagem = localStorage.getItem("personagemSelecionado");

  if(personagem){

    const card = document.getElementById(personagem);

    if(card){

      card.classList.add("highlight");

      card.scrollIntoView({
        behavior:"smooth",
        block:"center"
      });

    }

  }

});


/* ===== BOTÃO SAIBA MAIS ===== */

function verBuild(nome){

  localStorage.setItem("personagemSelecionado", nome);

  window.location.href = "builds.html";

}