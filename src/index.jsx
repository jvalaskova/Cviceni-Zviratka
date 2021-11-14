import React from 'react';
import { render } from 'react-dom';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';
import './style.css';

const App = () => {
  
  const [changeAnimal, setChangeAnimal] = useState(data[0]);
  const [finalDetail, setFinalDetail] = useState(data[0]);

  useEffect(
		() => {
			fetch('https://lrolecek.github.io/zviratka-api/zvirata.json').then((response) => response.json()).then(data => {setChangeAnimal(data)} )
		},
		[]
	);

  const handleFinal = () => {
    setFinalDetail(animalData.key)
  }
  
  return(
    <>
    <h1>Zvířátka v ZOO</h1>
    <div className="container">
      <AnimalList animalData={changeAnimal} handleGiveInformation={handleFinal}/>
      <AnimalDetail detail={finalDetail}  />
    </div>
    </>
  );
  
}


render(<App />, document.querySelector('#app'));
