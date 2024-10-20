// ======PRODUCTS======

import Swal from "sweetalert2"
import { productoActivo } from "../../main"
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage"
import { closeModal } from "../views/modal"
import { handleGetProductToStore, handleRenderList } from "../views/store"



//Guardar
const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener('click', () => {
    handleSaveModifyElements()
})

//Funcion para guardar
const handleSaveModifyElements = () => {
    const nombre = document.getElementById("nombre").value,
        imagen = document.getElementById("img").value,
        precio = document.getElementById("precio").value,
        categoria = document.getElementById("categoria").value;
    let object = null

    if (productoActivo) {
        object = {
            ...productoActivo, nombre, imagen, precio, categoria
        }
    } else {
        object = {
            id: new Date().toISOString(), nombre, imagen, precio, categoria
        }
    }

    Swal.fire({
        title: "Excelente!",
        text: "Producto guardado con éxito!",
        icon: "success"
    });

    setInLocalStorage(object)
    handleGetProductToStore()
    closeModal()
}

//Eliminar elemento

export const handleDeleteProduct = () => {
    Swal.fire({
        title: "Eliminar Producto?",
        text: "No sera revertible",
        icon: "warning",
        showCancelButton: true,
        cancelButtonColor: "#C0C0C0",
        confirmButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage()
            const result = products.filter((e) => e.id !== productoActivo.id)
            //setear el nuevo array
            localStorage.setItem("products", JSON.stringify(result))
            const newProducts = handleGetProductLocalStorage()
            handleRenderList(newProducts)
            closeModal()
            Swal.fire({
                title: "Producto Eliminado",
                text: "El producto fue eliminado.",
                icon: "success"
            });
        } else {
            closeModal()
        }
    });

}
