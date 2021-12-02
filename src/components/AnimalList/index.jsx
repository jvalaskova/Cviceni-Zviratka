import React from 'react';
import Animal from '../Animal';

const AnimalList = ({animalData, onChangeDetail}) => {


    return(
    <>
        
        <div className="zvirata"> 

        {animalData.map( (animalAll) => <Animal key={animalAll.id} id={animalAll.id} nazev={animalAll.nazev} nazevLatinsky={animalAll.nazevLatinsky} foto={animalAll.foto} handleClickAnimal={onChangeDetail} /> ) }

        </div>
    </>
    );

}

export default AnimalList;