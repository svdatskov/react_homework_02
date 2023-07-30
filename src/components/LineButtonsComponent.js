import React from "react";
import {IconButton} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";

const LineButtonsComponent = ({hover, onEdit, onDelete}) => {
    if (hover) {
        return (
            <React.Fragment>
                <IconButton size="small" edge="end">
                    <Edit onClick={onEdit}/>
                </IconButton>
                <IconButton size="small" edge="end">
                    <Delete onClick={onDelete}/>
                </IconButton>
            </React.Fragment>
        )
    }
}

export default LineButtonsComponent;