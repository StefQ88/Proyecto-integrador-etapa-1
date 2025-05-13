
const inputsArray = [
    {
        name: "name",
        validation: value => value.trim().length > 2,
        errorText: "El nombre del producto es obligatorio y debe tener más de 2 letras"
    },

    {
        name: "price",
        validation: value => !isNaN(value) && Number(value) > 0,
        errorText: "El precio debe ser un número mayor a 0"
    },
    {
        name: "stock",
        validation: value => !isNaN(value) && Number(value) > 0,
        errorText: "El stock debe ser 0 o mayor"
    },
    {
        name: "brand",
        validation: value => value.trim().length > 1,
        errorText: "La marca es obligatoria"
    },
    {
        name: "category",
        validation: value => value !== "",
        errorText: "Debes seleccionar una categoría"
    },
    {
        name: "short_description",
        validation: value => value.trim().length > 5,
        errorText: "La descripción corta es muy breve"
    },
    {
        name: "large_description",
        validation: value => value.trim() === "" || value.trim().length > 10,
        errorText: "La descripción larga debe tener al menos 10 caracteres si se completa"
    },
    {
        name: "age_from-value",
        validation: value => {
            const unit = document.getElementById("age_from-unit")?.value
            return !isNaN(value) && Number(value) >= 0 && (unit === "meses" || unit === "años")
        },
        errorText: "La edad mínima debe ser 0 o mayor, y debe seleccionar una unidad válida"
    },
    {
        name: "age_to-value",
        validation: value => {
            const unit = document.getElementById("age_to-unit")?.value
            return !isNaN(value) && Number(value) >= 0 && (unit === "meses" || unit === "años")
        },
        errorText: "La edad máxima debe ser 0 o mayor, y debe seleccionar una unidad válida"
    },
    {
        name: "free_delivery",
        validation: () => true, //registro solo el valor del checkbox
        errorText: ""
    },
    {
        name: "image",
        validation: () => {
            const input = document.getElementById("image");
            return input && input.files.length > 0;
        },
        errorText: "Debes seleccionar una imagen"
    }
]

const uploadSubmit = (event) => {
    event.preventDefault()

    const values = {}
    let isValid = true

    for (let index = 0; index < inputsArray.length; index++) {
        const input = inputsArray[index] //guardo el objeto del array con la conf de validacion
        const inputName = input.name

        // obtiene el input y el elemento donde se muestra el error
        const fieldElement = document.getElementById(inputName)
        const errorElement = document.getElementById(`${inputName}-error`)

        //si el campo no existe, marca error y continua
        if (!fieldElement) {
            console.error(`No se encontró el campo con id: ${inputName}`)
            isValid = false
            continue
        }

        // determina el valor a validar segun el tipo de campo
        let valueToValidate
        if (fieldElement.type === "file") {
            valueToValidate = null
        } else if (fieldElement.type === "number") {
            valueToValidate = fieldElement.valueAsNumber
        } else {
            valueToValidate = fieldElement.value
        }


        const passedValidation = !input.validation || input.validation(valueToValidate)


        if (passedValidation) {
            // Si pasa la validación, guarda el valor como checked, number o value

            if (fieldElement.type === "checkbox") {
                values[inputName] = fieldElement.checked
            } else if (fieldElement.type === "number") {
                values[inputName] = fieldElement.valueAsNumber
            } else {
                values[inputName] = fieldElement.value
            }

            // guarda unidad 
            if (inputName === "age_from-value") {
                const unit = document.getElementById("age_from-unit")?.value
                values["age_from-unit"] = unit
            }

            if (inputName === "age_to-value") {
                const unit = document.getElementById("age_to-unit")?.value
                values["age_to-unit"] = unit
            }

            // Limpia errores 
            fieldElement.classList.remove("with-error")
            if (errorElement) {
                errorElement.innerText = ""
                errorElement.classList.remove("is-visible")
            }
        } else {

            // Si falla la validacion, agrega estilos y mensaje de error
            fieldElement.classList.add("with-error")
            if (errorElement) {
                errorElement.innerText = input.errorText
                errorElement.classList.add("is-visible")
            }
            isValid = false
        }
    }

    // si todos los campos son validos, muestra datos y resetea el formulario
    if (isValid) {
        console.log("Datos válidos:", values)
        const form = document.getElementById("upload-form")
        form.reset()

        const imageInput = document.getElementById("image") //se limpia imagen
        if (imageInput) imageInput.value = ""

        alert("¡Formulario enviado correctamente!")
    }
}


window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("upload-form");
    if (form) {
        form.addEventListener("submit", uploadSubmit);
    }
});
