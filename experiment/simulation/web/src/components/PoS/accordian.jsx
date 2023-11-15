import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

export default function MainAccordion({activeIndex}) {

  const commonStyles = {
    background: "Gray",
    borderColor: '#22eff1',
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "30px",
    marginTop: "5%",
    color: "white",
  };

  const activeStyles = {
    ...commonStyles,
    background: "Green"
  };
  const accordionContent = [
    { title: "1.StakeHolder Influence" },
    { title: "2.Incentivizing Participation" },
    { title: "3.Avoiding Concentration of Power" },
    { title: "4.Validation and Verification" },
    { title: "5.Security and Trust" },
  ];

  return (
    <div>
      {accordionContent.map((item, index) => (
        <Accordion
          key={index}
          style={index === activeIndex ? activeStyles : commonStyles}
        >
          <AccordionSummary
            aria-controls={`panel${index + 1}a-content`}
            id={`panel${index + 1}a-header`}
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
        </Accordion>
      ))}
    </div>
  );
}