import React, { Suspense } from "react";
import Type from '../components/Type';
import {useHistory} from 'react-router-dom';
import Loader from "../components/Loader/Loader"
const LazyImage = React.lazy(() => import('./LazyImage'));
const Card = ({
  id,
  name,
  types
}) => {
  const router = useHistory()
  let srcImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png"
  return (
    <div onClick={() => router.push(`/pokemon/${id}`)} className="poke-container">
                <div  className="img-container">
                  <Suspense fallback={<Loader/>}>
                      <LazyImage srcImg={srcImg}/>
                  </Suspense>
                </div>
                <div className="info-container">
                    <h3 className="name">{name}</h3>
                    <span className="number">{id.toString().padStart(3, '0')}</span>
                </div>
                <div className="types-container">
                {types.map(type => (
                  <Type typeName = {type.type.name}/>
                ))}
                </div>
    </div>
  );
};

 export default Card;