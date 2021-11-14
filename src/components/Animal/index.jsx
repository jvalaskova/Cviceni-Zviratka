import React from 'react';

const Animal = ({foto, nazev, nazevLatinsky, handleGiveCall}) => {

    const handleClickAnimal = () => {
        handleGiveCall()
    }
    return(
    <>
        <div className="zvire" onClick={handleClickAnimal}>
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