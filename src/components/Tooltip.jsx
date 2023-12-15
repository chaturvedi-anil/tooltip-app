import React, {useState} from 'react';

function Tooltip(props) {

    // destructuring props and getting position array from App
    const {positions} = props;

    // maintaing state for the position and visibility
    const [hoverPostion, setHoverPostion] = useState('right');
    const [visible, setVisible] = useState('hidden');
    
    // function to give the position
    const hanldeGivePostions=(e)=>{
        setHoverPostion(e.target.innerHTML);
    }

    // changing tooltip content visibility to visible
    const handleMouseOver=()=>{
        setVisible('visible');
    }
     
    // changing tooltip content visibility to hidden
    const handleMouseOut=()=>{
        setVisible('hidden');
    }   

    return (
        <div className='main-container'>
            <div className='instructions-container'>
                <h1>Tooltip App</h1>
                <div className="instructions">
                    <p><b>Instructions :</b> </p>
                    <p>1. click on button any postions</p>
                    <p>2. then hover on <b>Hover Over Me</b> button </p>
                </div>
            </div>
            <div className='btn-container'>
                {positions.map((btn, index)=>(
                    <button 
                        key={index}
                        onClick={hanldeGivePostions}
                    >   
                        {btn}</button>
                ))}
            </div>
            <div className='tooltip-container'>

                {/* hovering button */}
                <button 
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                >
                    Hover Over Me!
                </button>

                {/* tooltip text */}
                <span style={{'visibility': `${visible}`}} className={`tooltip-content-${hoverPostion}`} >
                    I am Hovering in <b>{hoverPostion}</b> position
                </span>
            </div>
        </div>
    )
}

export default Tooltip