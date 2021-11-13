import { typeColors } from "./typeColors";


const Type = ({
   typeName
}) => {
    let color = typeColors[typeName]
    let typeStyle = {}
    typeStyle.backgroundColor = color
    return (
        <div style={typeStyle}  className="type-block">
            <p className="type-text">{typeName}</p>
        </div>
  );
};

 export default Type;