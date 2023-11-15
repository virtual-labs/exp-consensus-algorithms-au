import React from 'react';


const Instruction = (props)=>{

    const {text} = props;
return(

    <div className="text">
        <p style={{color:'white'}}>{text}</p>
    </div>
)

}

export default Instruction;