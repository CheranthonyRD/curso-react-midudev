import "./styles/app.css";
import { getRandomFact } from "./services/fact.js";
import useCatImage from "./services/useCatImage.js";
import useFact from "./services/useFact.js";


const App = () => {
  const {fact, randomFactAndUpdateState} = useFact();
  const {imageURL}  = useCatImage({fact: fact});

  const handleChangeImage = () => {
    randomFactAndUpdateState();
  }

  return (
    <section className="cat-section">

      {fact && (<h2 className="fact-title">Fact: {fact}</h2>)}
      <button className="fact-button" onClick={handleChangeImage}>Get Random Image Cat</button>
      {imageURL && (<img className="cat-image" src={imageURL} alt={`Image obtained from a random fact ${fact}`} />)}
     
    </section>
  )
}

export default App
