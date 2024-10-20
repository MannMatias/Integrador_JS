//LOCAL STORAGE

export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"))
    if (products) {
        return products
    } else {
        return []
    }
}
//Guardar en localStorage

//Recibir un producto
export const setInLocalStorage = (productoIngresado) => {
    if (productoIngresado) {
        //traer los elementos
        let productsInLocal = handleGetProductLocalStorage()

        const existingIndex = productsInLocal.findIndex((productsLocal) =>
            productsLocal.id === productoIngresado.id)
        //verificar si el elemento existe
        if (existingIndex !== -1) {
            //si existe debe reemplazarse
            productsInLocal[existingIndex] = productoIngresado
        } else {
            //si no agregarse
            productsInLocal.push(productoIngresado)
        }
        //setear el nuevo array
        localStorage.setItem("products", JSON.stringify(productsInLocal))
    }
}