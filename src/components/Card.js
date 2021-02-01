import React from 'react'
import ReactDOM from 'react-dom';

import './Cards.css';

import Characters from './Characters';

import axios from 'axios';



function Card() {

    const [card, setCard] = React.useState([])

    return (
        <div class="card-deck">
            <Characters />
        </div>
    )

}

export default Card;