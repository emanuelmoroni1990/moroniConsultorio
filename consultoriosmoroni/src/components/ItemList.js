import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function ItemList (chars){
    return(
        <div>
            {chars.map (c => <li>{c.name}</li> )}
        </div>
    )
}

export default ItemList;