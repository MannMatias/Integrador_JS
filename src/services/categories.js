//=============CATEGORIAS===============

import { categoriaActiva } from "../../main"
import { handleGetProductLocalStorage } from "../persistence/localStorage"
import { handleRenderList } from "../views/store"

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage()

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products)
            break;
        case "Todo":
            handleRenderList(products)
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((e) => e.categoria === categoryIn)
            handleRenderList(result)
            break;
        default:
            break;
        case "MayorPrecio":
            handleRenderList(products.sort((a,b) => b.precio - a.precio))
            break;
        case "MenorPrecio":
            handleRenderList(products.sort((a,b) => a.precio - b.precio))
            break;
    }
}


//render de la vista categorias

export const renderCategories = () => {
    //tomamos elementos de la lista
    const ulList = document.getElementById("listFilter")
    //creamos esos elementos dentro de la lista
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas"> Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="MayorPrecio">Mayor Precio</li>
    <li id="MenorPrecio">Menor Precio</li>
    `
    //anadimos dinamicamente el evento click
    const liElements = ulList.querySelectorAll("li")
    liElements.forEach((liElement) => {
        liElement.addEventListener('click', () => {
            handleClick(liElement)
        })
    })
    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id)
        liElements.forEach((e) => {
            if (e.classList.contains('liActive')) {
                e.classList.remove('liActive')
            } else if (elemento === e) {
                e.classList.add('liActive')
            }
        })
    }
}