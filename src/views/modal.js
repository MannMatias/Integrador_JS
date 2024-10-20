//======MODAL======

import { productoActivo, setProductoActivo } from "../../main"
import { handleDeleteProduct } from "../services/products"

const cancelButton = document.getElementById("cancelButton")
cancelButton.addEventListener('click', () => {
    closeModal()
})

// ABRIR MODAL
export const openModal = () => {
    const modal = document.getElementById("modalPopup")
    modal.style.display = "flex"
    const deleteButton = document.getElementById("deleteButton")
    if (productoActivo) {
        deleteButton.style.display = "block"
    } else {
        deleteButton.style.display = "none"
    }


    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categoria = document.getElementById("categoria");
        nombre.value = productoActivo.nombre
        precio.value = productoActivo.precio
        imagen.value = productoActivo.imagen
        categoria.value = productoActivo.categoria
    }
}

// CERRAR MODAL
export const closeModal = () => {
    const modal = document.getElementById("modalPopup")
    modal.style.display = "none"
    setProductoActivo(null)
    resetModal()
}

//RESETEAR MODAL
const resetModal = () => {
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categoria = document.getElementById("categoria");
    nombre.value = ""
    precio.value = null
    imagen.value = ""
    categoria.value = "Seleccione una categoria"
}

//ELIMINAR ELEMENTO
const deleteButton = document.getElementById("deleteButton")
deleteButton.addEventListener('click', () => {
    handleDeleteButton()
})

const handleDeleteButton = () => {
    handleDeleteProduct()
}