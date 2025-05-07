let showMenu = false;

const handleMenu = () => {
    const menu = document.getElementById("mobile_menu");

    if (showMenu) {
        menu.className = menu.className.replace("-visible", "");
        document.body.classList.remove("no-scroll"); 
    } else {
        menu.className = menu.className.concat("-visible");
        document.body.classList.add("no-scroll"); 
    }

    showMenu = !showMenu;
};
