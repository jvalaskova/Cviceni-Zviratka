import React from 'react';
import Animal from '../Animal';

const AnimalList = ({animalData, onChange}) => {

    const handleClickInformation = () => {
        onChange(id)
    };

    return(
    <>

        <div className="zvirata"> 

        {animalData.map( (animalAll) => <Animal key={animalAll.id} id={animalAll.id} nazev={animalAll.nazev} nazevLatinsky={animalAll.nazevLatinsky} domovina={animalAll.domovina} biotop={animalAll.biotop} potrava={animalAll.potrava} velikost={animalAll.velikost} popis={animalAll.popis} foto={animalAll.foto} zoo={animalAll.zoo} animallistcall={handleClickInformation} /> ) }

        </div>
    </>
    );

}

export default AnimalList;