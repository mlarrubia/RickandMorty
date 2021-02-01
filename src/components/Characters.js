import React from 'react'
import ReactDOM from 'react-dom';

import axios from 'axios';



function Characters() {

    const [characters, setCharacters] = React.useState([])


    React.useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => {

                console.log(res.data);

                const array = res.data.results.map((morty) => {
                    let name = morty.name;
                    let image = morty.image;
                    let location = morty.location.name;

                    return { name: name, image: image, location: location }
                })

                setCharacters(array)
            }, []);
    })

    return (

        characters.map(char => (
            <div class="card">
                <div>
                    <img src={char.image} alt="pic" />
                </div>
                <div class="card-info">
                    <h3>{char.name}</h3>
                    <p>Rick and morty</p>
                    <p>Location: {char.location}</p>
                </div>
            </div>
        ))

    )
}
export default Characters;