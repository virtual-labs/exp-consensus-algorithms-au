import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import i from '../PoS/images/Group 1.svg'
import './details.css'
import './manifesto.css'
export default function Manifesto(props) {
  return (
    <>
    <div>
    <div>
<h3 className='manifesto-heading'>Election manifesto</h3>


      <Accordion  className='details'  style={{ background: 'black', borderColor: 'green', borderWidth: '1px', borderStyle: 'solid',borderRadius:'30px' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          
        >
          <Typography> <i class="fa-solid fa-scroll fa-2xl" style={{color:"#119231"}}></i>  Green Future Party <span class="material-symbols-outlined">
          
</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
   
             <ul>

                 <li> Powering a Renewable Nation: By 2040, ensure that our nation relies solely on green and renewable energy sources, phasing out coal and reducing our carbon footprint.</li> 
               <li>   Agriculture Reimagined: Encourage organic farming, aim to reduce pesticide use by 50% within a decade, and incentivize sustainable farming practices..</li>
                
                   </ul>
                   <div className='manifesto-btn'>
                   <button type="button" class="btn btn-outline-light manifesto-button "  on onClick={() => {
      props.onCloseClick();
      props.onStepChange(); 
      props.onActiveAccordionChange(); 
  }}>Select</button>
                   </div>
          </Typography>
        </AccordionDetails>
      </Accordion >
      <Accordion className='details' style={{ background: 'black', borderColor:'#19A7CE', borderWidth: '1px', borderStyle: 'solid',borderRadius:'30px',marginTop:'5%' }}>
            <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
          <i class="fa-solid fa-scroll fa-2xl" style={{color:"#1B82C9"}}></i>
            Technological Party
             {/* <i class="fa-solid fa-robot">    </i> */}
              </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <ul>
          <li>Digital Literacy for All: Ensure every child, regardless of background, has access to computer education, making them future-ready.
rioritizing ethics.</li>
          <li>Innovation Nation: Establish state-of-the-art innovation hubs across the country, creating a haven for startups and tech enterprises.
 </li>
         
         </ul>
            <div className='manifesto-btn'>
                   <button type="button" class="btn btn-outline-light manifesto-button "  onClick={() => {
      props.onCloseClick();
      props.onStepChange(); 
      props.onActiveAccordionChange(); 
  }}>Select</button>
                   </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='details'  style={{ background: 'black', borderColor:'#EAC696', borderWidth: '1px', borderStyle: 'solid',borderRadius:'30px',marginTop:'5%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
          <i class="fa-solid fa-scroll fa-2xl" style={{color:"#D18960"}}></i>Cultural Party</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <ul>
          <li>National Festivity Drive: Allocate funds to promote cultural festivals that underline our nation's diversity, attracting global tourism and strengthening national unity.
        
         <li>Renaissance in Education: Reform the educational system by mandating art, music, and cultural education, ensuring that our youth appreciate the beauty of our traditions.</li>
</li>
         </ul>
            <div className='manifesto-btn'>
            <button type="button" class="btn btn-outline-light manifesto-button "  onClick={() => {
      props.onCloseClick();
      props.onStepChange(); 
      props.onActiveAccordionChange(); 
  }}>Select</button>

                   </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
    </div>
    <div className='next-button'>
    {/* <button 
  style={{borderColor: '#22eff1',marginLeft:"70%",marginTop:"10%"}} 
  type="button" 
  className="btn btn-outline-light details-btn" 
  onClick={() => {
      props.onCloseClick();
      props.onStepChange(); 
      props.onActiveAccordionChange(); 
  }}
>
  Close
</button> */}
          </div>
    </>
  );
}