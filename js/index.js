const list = document.querySelectorAll(".container-perguntas section");
const menu = document.querySelector(".menu_open");
const view_menu = document.querySelector(".view_menu");
list.forEach((element) => {
  element.addEventListener("click", () => {
    let pergunta = element.children[0];
    let imagem = element.children[0].children[1];
    let sizep = element.children[1].children[0];
    let toggle;
    if (pergunta.className === "pergunta1") {
      toggle = pergunta.className = "open";
      imagem.src = "./src/img/icons/praCima.svg";
    } else {
      toggle = pergunta.className = "pergunta1";
      imagem.src = "./src/img/icons/praBaixo.svg";
    }
    toggle == "pergunta1"
      ? (element.children[1].style.height = "0px")
      : (element.children[1].style.height = `${sizep.clientHeight * 1.1}px`);
  });
});

window.addEventListener("resize", (e) => {
  const view = e.target.visualViewport.width;
  if (view <= 1035) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
  console.log(view);
});

menu.addEventListener("click", () => {
  let isActive = "";
  if (menu.style.display === "block") {
    isActive =
      menu.className === "menu_open"
        ? (menu.className = "active")
        : (menu.className = "menu_open");
  }
  isActive === "active"
    ? (view_menu.style.display = "block")
    : (view_menu.style.display = "none");
});
