import { useState, useEffect } from "react";



const useCatImage = ({fact}) =>{
 const [imageURL, setImageURL] = useState();
 
 useEffect(()=>{
    if(!fact) return;
    const firstThreeWords = fact.split(" ", 3).join(" ");
    const URL = `https://cataas.com/cat/says/${firstThreeWords}?fontColor=white`;

    fetch(URL)
    .then(response => {setImageURL(response.url)});
 }, [fact]);

 return {imageURL}
}





export default useCatImage