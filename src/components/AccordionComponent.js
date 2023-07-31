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

const AccordionComponent = ({post, onEdit, onDelete}) => {

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
            <Accordion expanded={expanded === post.id} onChange={handleChange(post.id)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography sx={{width: '5%', flexShrink: 0}}>
                        <b>{post.id}.</b>
                    </Typography>
                    <Typography sx={{width: '85%', flexShrink: 0}}>
                        {post.title}
                    </Typography>
                    <Typography>
                        <LineButtonsComponent
                            post={post}
                            hover={hover}
                            onEdit={onEdit}
                            onDelete={onDelete}/>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {post.body}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default AccordionComponent;