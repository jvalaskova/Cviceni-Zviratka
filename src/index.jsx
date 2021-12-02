import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';
import './style.css';

const App = () => {
  
  const [seznamZvirat, setSeznamZvirat] = useState([]);
  const [finalDetail, setFinalDetail] = useState();

  useEffect(
		() => {
			fetch('https://lrolecek.github.io/zviratka-api/zvirata.json').then((response) => response.json()).then(data => {setSeznamZvirat(data.zvirata)} )
		},
		[]
	);

  const handleFinal = (id) => {
    setFinalDetail(id)
  };
  
  return(
    <>
    <h1>Zvířátka v ZOO</h1>
    <div className="container">
      <AnimalList animalData={seznamZvirat} onChangeDetail={handleFinal} />
      {seznamZvirat !== [] && finalDetail ? <AnimalDetail detail={seznamZvirat[finalDetail-1]} /> : null}
    </div>
    </>
  );
  
}


render(<App />, document.querySelector('#app'));
