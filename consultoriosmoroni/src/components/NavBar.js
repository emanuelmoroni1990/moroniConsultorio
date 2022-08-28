import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import BarraNavegacionBrand from './CartWidget';
import CantidadTurnos from './ItemListContainer';

function BarraNavegacion (){
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <BarraNavegacionBrand></BarraNavegacionBrand>
                <a class="navbar-brand" href="#">Consultorios</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                </div>
                <CantidadTurnos turnos={2}></CantidadTurnos>
            </div>
        </nav>
    );
}

export default BarraNavegacion;