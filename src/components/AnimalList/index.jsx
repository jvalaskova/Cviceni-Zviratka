import React from 'react';
import Animal from '../Animal';

const AnimalList = ({animalData, onChangeDetail}) => {

    const handleClickInformation = (id) => {
        onChangeDetail(id)
    };

    return(
    <>

        <div className="zvirata"> 

        {animalData.map( (animalAll) => <Animal key={animalAll.id} id={animalAll.id} nazev={animalAll.nazev} nazevLatinsky={animalAll.nazevLatinsky} foto={animalAll.foto} clickAnimal={handleClickInformation} /> ) }

        </div>
    </>
    );

}

export default AnimalList;