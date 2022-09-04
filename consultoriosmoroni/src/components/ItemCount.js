// https://es.reactjs.org/docs/hooks-state.html

import React, { useState }from 'react'
import vestidoImg from '../img/vestido.png'
import 'bootstrap/dist/css/bootstrap.css';

function ItemCount ({stock, initial, onAdd}){

    const [counter, setCounter] = useState(initial);

    //console.log("Stock: " + stock + " Initial: " + initial + " Counter: " + counter);

    const sumarProductos = () => {
        //console.log("Incremento de productos.");
        if(counter < stock){
            setCounter(counter + 1);
            console.log(counter);
        }
        else{
            console.log("Límite de stock alcanzado.");
        }
    };

    const restarProductos = () => {
        //console.log("Decremento de productos.");
        if(counter > 0){
            setCounter(counter - 1);
            console.log(counter);
        }
        else{
            console.log("No se pueden restar más.");
        }
    };

    return(
        <div className="card" style={{width: 300}}>
           <img src={vestidoImg} class="card-img-top" alt="Ups..."></img>
            <div class="card-body">
                <button onClick={sumarProductos} className="btn btn-outline-primary">+</button>
                <p>{counter}</p>
                <button onClick={restarProductos} className="btn btn-outline-primary">-</button>
            </div>
            <button onClick={onAdd} className="btn btn-outline-secondary">Agregar al carrito</button> 
        </div>
    )
}

export default ItemCount;