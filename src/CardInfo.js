import React from 'react';
import { useEffect, useState } from "react"
import { getOnePokemon } from "./onePokemonData";
import {useParams} from "react-router-dom";

function CardInfo() {
    const params = useParams();
    const [item, setItem] = useState({});
    
    

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await getOnePokemon(params.id)
            setItem(data)
        }
        fetchPokemon()
    }, []);
    
    console.log(item.id)
    let c = item.name + ""
    let a = c[0].toUpperCase() + c.slice(1)
    return (
        <div>
              {a} 
        </div>
    );
  }

  export default CardInfo;