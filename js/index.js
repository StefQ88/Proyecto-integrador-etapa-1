
/**
 * Alterna la visibilidad del menú móvil.
 * 
 * Esta función se activa al hacer clic en el botón de menú hamburguesa.
 * Añade o elimina la clase `menu-mobile-visible` al elemento con ID `mobile_menu`,
 * lo que permite mostrar u ocultar el menú en pantallas pequeñas.
 * 
 * También cambia el estado booleano `showMenu` para saber si el menú está abierto o no.
 */

let showMenu = false

const handleMenu = () => {

    const menu = document.getElementById("mobile_menu")
    const header = document.querySelector(".header")
    const footer = document.querySelector(".footer")

    if (!menu || !header || !footer) return; //si alguno no existe salimos de la funcion

    const headerHeight = header.offsetHeight; //altura real de header en px
    const footerHeight = footer.offsetHeight;

    const windowHeight = window.innerHeight; //altura visible de la ventana


    if (!showMenu) {
        menu.classList.add("menu__container-visible") //agrego la clase que lo muestre

        menu.style.top = `${headerHeight}px` //debajo del header

        menu.style.height = `${windowHeight - headerHeight}px` //altura dinamica

        document.documentElement.style.overflow = "hidden";

    } else {
        menu.classList.remove("menu__container-visible") 

        menu.style.top = ""
        menu.style.height = ""

        document.documentElement.style.overflow = "";
    }
    showMenu = !showMenu

}