import React from "react";
import {IconButton} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";

const LineButtons = ({hover}) => {
    if (hover) {
        return (
            <React.Fragment>
                <IconButton size="small" edge="end">
                    <Edit className="edit"/>
                </IconButton>
                <IconButton size="small" edge="end">
                    <Delete/>
                </IconButton>
            </React.Fragment>
        )
    }
}

export default LineButtons;