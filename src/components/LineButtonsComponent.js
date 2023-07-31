import React from "react";
import {IconButton} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";

const LineButtonsComponent = ({post, hover, onEdit, onDelete}) => {
    if (hover) {
        return (
            <React.Fragment>
                <IconButton size="small" edge="end">
                    <Edit onClick={() => onEdit(post)}/>
                </IconButton>
                <IconButton size="small" edge="end">
                    <Delete onClick={() => onDelete(post)}/>
                </IconButton>
            </React.Fragment>
        )
    }
}

export default LineButtonsComponent;