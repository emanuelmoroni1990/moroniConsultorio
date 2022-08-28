import React from 'react'
import BarraNavegacionBrand from './CartWidget';

function BarraNavegacion (){
    return (
        <nav>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Productos
                </li>
                <li>
                    Carrito
                </li>
            </ul>            
        {/* <BarraNavegacionBrand></BarraNavegacionBrand> */}
        </nav>
    );
}

export default BarraNavegacion;