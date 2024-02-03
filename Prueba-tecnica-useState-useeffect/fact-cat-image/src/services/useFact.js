import { useEffect, useState } from "react";
import { getRandomFact } from "./fact.js";

const useFact = () =>{
 const [fact, setFact] = useState();

 const randomFactAndUpdateState = () =>{
    getRandomFact().then(fact => setFact(fact));
 }

 useEffect(randomFactAndUpdateState, [])

 return {fact, randomFactAndUpdateState}
}

export default useFact;