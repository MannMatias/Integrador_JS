import { handleGetProductLocalStorage } from "../persistence/localStorage"
import { handleRenderList } from "../views/store"

export const handleSearchProductByName = () => {
    const inputHeader = document.getElementById("inputHeader")
    const products = handleGetProductLocalStorage()

    const result = products.filter((e) => e.nombre.toLowerCase().includes(inputHeader.value.toLowerCase()))
    handleRenderList(result)
}