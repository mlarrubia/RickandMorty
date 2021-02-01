import React from 'react'
import ReactDOM from 'react-dom';




function Img(props) {

    const [card, setCard] = React.useState([])


    console.log("-0=-==-==-", props);


    return (
        <img src={props.img} alt="image" width="200px" />
    )

}

export default Img;