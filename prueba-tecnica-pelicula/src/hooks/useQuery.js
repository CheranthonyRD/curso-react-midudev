import { useState } from "react";

function useQuery(){
    const [query, setQuery] = useState("");

    function updateQuery({query}){
        setQuery(query);
    }

    return {query, updateQuery}
}