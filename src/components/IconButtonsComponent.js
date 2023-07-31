import React from "react";
import {IconButton} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";

const IconButtonsComponent = ({post, hover, onEdit, onDelete}) => {
    if (hover) {
        return (
            <React.Fragment>
                <IconButton onClick={() => onEdit(post)} size="small" edge="end">
                    <Edit />
                </IconButton>
                <IconButton onClick={() => onDelete(post)} size="small" edge="end">
                    <Delete />
                </IconButton>
            </React.Fragment>
        )
    }
}

export default IconButtonsComponent;