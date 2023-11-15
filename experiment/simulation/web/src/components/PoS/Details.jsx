import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './details.css';
import i from '../PoS/images/Group 1.svg'
import c1 from '../PoS/images/Channel1.svg'
import c2 from '../PoS/images/Channel2.svg'
import c3 from '../PoS/images/Channel3.svg'
import InstructionMessage from '../Instruction';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function BasicAccordion(props) {
  const [currentImage, setCurrentImage] = useState(1);

  
  const images = [
    c1,c2,c3
  ];
  return (
    <>
     <div className="App">
     

      <div className="image-container">
        <img src={images[currentImage - 1]} alt={`Image ${currentImage}`} />
      </div>
      <div className="button-container ">
      <button className={`channel-button btn btn-outline-light details-btn"  ${currentImage === 1 ? 'active' : ''}`} onClick={() => setCurrentImage(1)}>Channel 1</button>
<button className={`channel-button btn btn-outline-light  ${currentImage === 2 ? 'actives' : ''}`} onClick={() => setCurrentImage(2)}>Channel 2</button>
<button className={`channel-button btn btn-outline-light  ${currentImage === 3 ? 'actives' : ''}`} onClick={() => setCurrentImage(3)}>Channel 3</button>

      </div>
    </div>
  

      <div>
        <div>
        
          <button 
  style={{borderColor: '#22eff1',}} 
  type="button" 
  className="btn btn-outline-light details-btn" 
  onClick={() => {
      props.onCloseClick();
      props.onStepChange(); 
      props.onActiveAccordionChange(); 
  }}
>
  Close
</button>

          </div>
        
        </div>
      
    </>
  );
}
