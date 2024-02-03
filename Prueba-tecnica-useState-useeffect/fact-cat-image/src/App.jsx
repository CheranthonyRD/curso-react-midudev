import { useState, useEffect } from "react";
import "./styles/app.css";

const RANDOM_FACT_API = "https://catfact.ninja/fact";
const RANDOM_CAT_IMAGE = "https://cataas.com/cat/says/hello";

const App = () => {
  const [fact, setFact] = useState();
  const [imageCat, setImageCat] = useState();

  useEffect(()=>{
    getRandomFact().then(fact => setFact(fact));
  }, [])

  useEffect(()=>{
    
    if(!fact){
      return;
    }

    getImageFromFact({fact: fact}).then(imageURL => setImageCat(imageURL))
  }, [fact]);

  const handleChangeImage = () => {
    getRandomFact().then(fact => setFact(fact));
  }

  return (
    <section className="cat-section">
      <h2 className="fact-title">Fact: {fact}</h2>
      <button className="fact-button" onClick={handleChangeImage}>Get Random Image Cat</button>
      <img className="cat-image" src={imageCat} alt={`Image obtained from a random fact ${fact}`} />
     
    </section>
  )
}

const  getRandomFact = async ()=>{
  const response = await fetch(RANDOM_FACT_API);

  if(!response.ok){
    return ""
  }

  const factJSON = await response.json();
  const {fact} = factJSON;
  const firstThreeWords = fact.split(" ", 3).join(" ");
  return firstThreeWords;
 
}

const getImageFromFact = async ({fact}) =>{  
  const response = await fetch(`https://cataas.com/cat/says/${fact}?fontColor=white`)
  if(response.ok){    
    return response.url;
  }
}

export default App
