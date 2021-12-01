import React from 'react';
import './style.css';

const Animal = ({foto, nazev, nazevLatinsky, id, clickAnimal}) => {

    const handleClickAnimal = (id) => {
            clickAnimal(id)
    };

    return(
    <>
    
        <div className="zvire" key={id} onClick={handleClickAnimal}>
            <div className="zvire__foto">
                <img src={foto} alt={nazev} />
            </div>
            <div className="zvire__popis">
                <div className="zvire__nazev">{nazev}</div>
                <div className="zvire__latinsky">{nazevLatinsky}</div>
            </div>
        </div>
    </>
    );

}

export default Animal;