import React from 'react';


const Message = (props)=>{

    const {text} = props;
return(

    <div className="text">
        <p style={{color:'white'}}>{text}</p>
    </div>
)

}

export default Message;