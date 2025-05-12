
const inputsArray = [
    {
        name: "name",
        validation: value => value.trim().length > 2,
        errorText: "El nombre es incorrecto" 
    },
    {
        name: "surname",
        validation: value => value.trim().length > 1,
        errorText: "El apellido es obligatorio"
    },
    {
        name: "telephone",
        validation: value => {
            const regexp = new RegExp(/^\+?\d{8,15}$/)
            return regexp.test(value);
        },
        errorText: "Número de teléfono inválido"
    },
    {
        name: "email",
        validation: value => {
            const regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
            return regexp.test(value);
        },
        errorText: "El email no tiene el formato correcto"
    },
    {
        name: "reason",
        validation: value => value !== "",
        errorText: "Debes seleccionar un motivo"
    },
    {
        name:"body",
        validation: value => value.trim().length > 0,
        errorText: "El mensaje es obligatorio"
    }

]

const contactSubmit = (event) => {
    event.preventDefault()

    const values = {}
    let isValid = true

    for (let index = 0; index < inputsArray.length; index ++) {
        const input = inputsArray[index] 
        const inputName = input.name

        const fieldElement = document.getElementById(inputName) 

        const errorElement = document.getElementById(`${inputName}-error`) 

        if (input.validation(fieldElement.value)) {
            values[inputName] = fieldElement.value 

            fieldElement.classList.remove("with-error") 
            errorElement.innerText = "" 
            errorElement.classList.remove("is-visible");
        } else {
            fieldElement.classList.add("with-error") 
            errorElement.innerText = input.errorText;
            errorElement.classList.add("is-visible"); 

            isValid = false 
        }
    }

    const form = document.getElementById("contact-form")

    if (isValid) {
        console.log(values)
        form.reset()
        alert("¡Formulario enviado correctamente!")
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form")
    if (form) {
        form.addEventListener("submit", contactSubmit)
    }
})