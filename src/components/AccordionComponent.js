import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Delete, Edit} from "@mui/icons-material";

import '../App.css';
import {IconButton} from "@mui/material";
import {useState} from "react";
import LineButtons from "./LineButtons";

const AccordionComponent = ({props}) => {

    const [expanded, setExpanded] = useState(false);
    const [hover, setHover] = useState(false);

    const handleMouseOver = () => {
        setHover(true);
    };

    const handleMouseOut = () => {
        setHover(false);
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <Accordion expanded={expanded === props.id} onChange={handleChange(props.id)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography sx={{width: '5%', flexShrink: 0}}>
                        <b>{props.id}.</b>
                    </Typography>
                    <Typography sx={{width: '85%', flexShrink: 0}}>
                        {props.title}
                    </Typography>
                    <Typography>
                        <LineButtons hover={hover} />
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.body}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AccordionComponent;