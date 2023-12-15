import React, {useState} from 'react';

function Tooltip(props) {
    const {positions} = props;

    const [hoverPostion, setHoverPostion] = useState('left');
    const [visible, setVisible] = useState('visible');
    
    const hanldeGivePostions=(e)=>{
        console.log("pos : ",e.target.innerHTML);
        setHoverPostion(e.target.innerHTML);
    }

    const handleMouseOver=()=>{
        setVisible('visible');
    }
     
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
                <button 
                    onMouseEnter={handleMouseOver}
                    onMouseLeave={handleMouseOut}
                >
                    Hover Over Me!
                </button>
                <span style={{'visibility': `${visible}`}} className={`tooltip-content-${hoverPostion}`} >
                    I am Hovering in <b>{hoverPostion}</b> position
                </span>
            </div>
        </div>
    )
}

export default Tooltip