import { useState } from 'react';

function Toggle({image}){
const [active, setActive] = useState(true);

const handleChangeActive=()=>{
    setActive((previous)=>{
        return !previous
    })
}

return(
    <>
        <div  onClick={handleChangeActive} className="toggleWrapper picture" >
            {active ? (<img className="active" id={image.id}  alt={image.description} src={image.path}/>) :  
            (<h4 className="inactive">{image.description}</h4>)}
        </div>
    </>
)};



export default Toggle