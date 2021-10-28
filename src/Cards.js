
import { useEffect, useState } from "react"
import { getPokemons } from "./pokemonsData";
import Card from './Card';
import Loader from "./Loader"


const Cards = (props) =>  {
    const [items, setItems] = useState(undefined);
    const [limit, setLimit] = useState(10); 
    const [min, setMin] = useState(1); 
    const fetchPokemons = async () => {
        const data = await getPokemons(limit, min)
        setItems(items ? [...items, ...data] : data);
        setMin(limit + 1)
        setLimit(limit + 10)
    }
    const loadMore = () => {
        fetchPokemons()
      };
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
           
            : <Loader/>
        }
        {items && <div className="loadButton-wrapper">
            <button className="loadButton" onClick={loadMore}>Load more Pokemons!</button>
        </div> }
    </div>
}

  export default Cards;