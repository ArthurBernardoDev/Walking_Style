const list = document.querySelectorAll(".container-perguntas section");
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


