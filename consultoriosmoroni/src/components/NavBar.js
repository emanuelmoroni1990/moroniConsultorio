import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import BarraNavegacionBrand from './CartWidget';
import CantidadTurnos from './ItemListContainer';
import ItemListContainer from './ItemListContainer2';

function BarraNavegacion (){
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <BarraNavegacionBrand></BarraNavegacionBrand>
                <a className="navbar-brand" href="#">Consultorios</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                </div>
                <CantidadTurnos turnos={2}></CantidadTurnos>
                <ItemListContainer></ItemListContainer>
            </div>
        </nav>
    );
}

export default BarraNavegacion;