const menu = document.querySelector(".menu_open");
const view_menu = document.querySelector(".view_menu");

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
  