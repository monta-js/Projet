import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import GererVoiture from './components/admin/voiture/GererVoiture'
import { ListVoiture } from './components/admin/voiture/ListVoiture';



function App() {
  const [voituresList, setvoituresList] = useState([]);
  const [model, setModel] = useState("");
  const [image, setImage] = useState("");
  const [matricule, setMatricule] = useState("");
  const [description, setDescription] = useState("");

  const addVoiture = e => {
    e.preventDefault();
    let newVoiture = {
      model: model,
      image: image,
      matricule: matricule,
      description: description
    };
    
    return setvoituresList([...voituresList, newVoiture]);
    
  };

  return (
    <div className="App">
      <GererVoiture 
      addVoiture= {addVoiture}
      setModel = {setModel}
      setImage = {setImage}
      setMatricule = {setMatricule}
      setDescription = {setDescription}
       />
       <ListVoiture voituresList = {voituresList} />
    </div>
  );
}

export default App;
