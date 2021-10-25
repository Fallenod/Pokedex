
import Type from './Type';

const Card = ({
  id,
  name,
  types
}) => {

  let srcImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id + ".png"
  return (
    <div className="poke-container">
                <div  className="img-container">
                    <img src= {srcImg} alt="" />
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