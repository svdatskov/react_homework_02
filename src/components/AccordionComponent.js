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
import LineButtonsComponent from "./LineButtonsComponent";

const AccordionComponent = ({posts, onEdit, onDelete}) => {

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
            <Accordion expanded={expanded === posts.id} onChange={handleChange(posts.id)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography sx={{width: '5%', flexShrink: 0}}>
                        <b>{posts.id}.</b>
                    </Typography>
                    <Typography sx={{width: '85%', flexShrink: 0}}>
                        {posts.title}
                    </Typography>
                    <Typography>
                        <LineButtonsComponent hover={hover} onEdit={onEdit} onDelete={onDelete}/>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {posts.body}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AccordionComponent;