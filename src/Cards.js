
import { useEffect, useState } from "react"
import { getPokemons } from "./pokemonsData";
import Card from './Card';


const Cards = (props) =>  {
    const [items, setItems] = useState(undefined);
    
    const fetchPokemons = async () => {
        const data = await getPokemons(30)
        setItems(data)
    }

    useEffect(() => {
        fetchPokemons()
    }, []);
    return <div className="cards">
        {
         items ? items.map(({id, name, types}) => (
                <div className = "cards__item" >
                    <Card 
                    id={id} 
                    name={name[0].toUpperCase() + name.slice(1)} 
                    types={types}
                    />
                </div>
            ))
           
            : 'loading'
        }
    </div>
}

  export default Cards;