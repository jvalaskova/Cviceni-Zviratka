import React from 'react';
import Animal from '../Animal';

const AnimalList = ({animalData, handleGiveInformation}) => {

    const handleInformation = () => {
        handleGiveInformation()
    }

    return(
    <>
        <div className="zvirata" handleGiveCall={handleInformation}> 

        {animalData.map( (animalAll, id) => <Animal key={id} nazev={animalAll.nazev} nazevLatinsky={animalAll.nazevLatinsky} domovina={animalAll.domovina} biotop={animalAll.biotop} potrava={animalAll.potrava} velikost={animalAll.velikost} popis={animalAll.popis} foto={animalAll.foto} zoo={animalAll.zoo} />)}

        </div>
    </>
    );

}

export default AnimalList;