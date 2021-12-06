import React from 'react'

const Productos = ({ productos }) => {

    const { nombre, precio, id } = productos
    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
        </div>

    )
}

export default Productos
