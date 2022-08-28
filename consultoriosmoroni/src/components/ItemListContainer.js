import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function CantidadTurnos ({turnos}){
    return(
        <button class="btn btn-outline-success" type="submit">Turnos tomados: {turnos}</button>
    );
}

export default CantidadTurnos;