import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ItemList from './ItemList';

function ItemListContainer (){
    
    const [chars, setChars] = useState ([]);

    useEffect(() => {

        const URL = 'https://rickandmortyapi.com/api/character';
        fetch(URL)
            .then( (res) => {res.json()} )
            .then( (data) => {
                console.log( data.results );
                setChars( data.results );
            })

    }, []);

    return(
        <div>
            {/* <ItemList chars={chars}></ItemList> */}
        </div>
    )

}

export default ItemListContainer;