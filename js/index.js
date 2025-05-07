
let showMenu = false;

const handleMenu = () => {
    const menu = document.getElementById("mobile_menu")
    if (showMenu) {
        menu.className = menu.className.replace("-visible", "")
    } else {
        menu.className = menu.className.concat("-visible")
    }
    showMenu = !showMenu
}





// const handleMenu = () => {
//     // Obtengo referencias al menú, header y footer
//     const menu = document.getElementById("mobile_menu");
//     const header = document.querySelector(".header");
//     const footer = document.querySelector(".footer");

//     if (!menu || !header || !footer) return; //si falta alguno cancelo

//     const isOpen = menu.classList.contains("menu__container-visible");

//     if (isOpen) {


//         menu.classList.remove("menu__container-visible");
//         // Limpio estilos dinámicos aplicados antes
//         menu.style.top = "";
//         menu.style.height = "";
//         menu.style.position = "";

//         // Reactivo el scroll del fondo
//         document.documentElement.style.overflow = "";
//         document.body.style.overflow = "";

//     } else {
//         const headerHeight = header.offsetHeight;
//         const footerHeight = footer.offsetHeight;

//         const viewportHeight = window.innerHeight;

//         const availableHeight = viewportHeight - headerHeight - footerHeight;

//         menu.style.position = "fixed"; // Aseguro que esté fijo
//         menu.style.top = `${headerHeight}px`; // El menú arranca debajo del header
//         menu.style.height = `${availableHeight}px`; // Termina antes del footer

//         menu.classList.add("menu__container-visible");
//         // Desactivo el scroll del fondo para que no se mueva la página detrás del menú
//         document.documentElement.style.overflow = "hidden";
//         document.body.style.overflow = "hidden";
//     }
// };
