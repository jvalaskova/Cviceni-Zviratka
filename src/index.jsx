import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';
import './style.css';

const App = () => {
  
  const [changeAnimal, setChangeAnimal] = useState([]);
  const [finalDetail, setFinalDetail] = useState();

  useEffect(
		() => {
			fetch('https://lrolecek.github.io/zviratka-api/zvirata.json').then((response) => response.json()).then(data => {setChangeAnimal(data.zvirata)} )
		},
		[]
	);

  const handleFinal = () => {
    setFinalDetail()
  };
  
  return(
    <>
    <h1>Zvířátka v ZOO</h1>
    <div className="container">
      <AnimalList animalData={changeAnimal} onChange={handleFinal} />
      <AnimalDetail detail={finalDetail}  />
    </div>
    </>
  );
  
}


render(<App />, document.querySelector('#app'));
