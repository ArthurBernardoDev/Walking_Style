const menu = document.querySelector(".menu_open");
const view_menu = document.querySelector(".view_menu");


  menu.addEventListener("click", () => {
    let isActive = "";
    
      isActive =
        menu.className === "menu_open"
          ? (menu.className = "active")
          : (menu.className = "menu_open");
    
    isActive === "active"
      ? (view_menu.style.display = "block")
      : (view_menu.style.display = "none");
  });
  