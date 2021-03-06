
import { useEffect, useState } from "react"
import { getPokemons } from "../api/pokemonsData";
import Card from '../components/Card';
import Loader from "../components/Loader/Loader.js"


const Cards = (props) =>  {
    const [items, setItems] = useState(undefined);
    const [limit, setLimit] = useState(20); 
    const [min, setMin] = useState(1); 
    const fetchPokemons = async () => {
        const data = await getPokemons(limit, min)
        setItems(items ? [...items, ...data] : data);
        setMin(limit + 1)
        setLimit(limit + 20)
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