const RANDOM_FACT_API = "https://catfact.ninja/fact";
const RANDOM_CAT_IMAGE = "https://cataas.com";

export const getRandomFact = async ()=>{
    const response = await fetch(RANDOM_FACT_API);
  
    if(!response.ok){
      return ""
    }
  
    const factJSON = await response.json();
    const {fact} = factJSON;  
    return fact; 
}