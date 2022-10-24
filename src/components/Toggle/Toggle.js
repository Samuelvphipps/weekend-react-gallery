import { useState } from 'react';
//This file is no longer needed
function Toggle({image}){
const [active, setActive] = useState(true);

const handleChangeActive=()=>{
    // setActive((previous)=>{
    //     return !previous
    // })

    setActive(!active);
}

return(
    <>
        <div  onClick={()=>setActive(!active)} className="toggleWrapper picture" >
            {active ? 
            (<img className="active" id={image.id}  alt={image.description} src={image.path}/>) 
            :  
            (<h4 className="inactive">{image.description}</h4>)}
        </div>
    </>
)};
/*
solution guidance found at:
https://marysallent.medium.com/how-to-toggle-images-icons-using-react-hooks-for-beginners-by-a-beginner-e4b8459f1ce4
*/

/*
storing active state locally which is modified on click and then the ternary operator decides what to rerender
*/


export default Toggle