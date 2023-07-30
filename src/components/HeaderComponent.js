import React, {useState} from "react";
import logo from "../logo.svg";
import {Button} from "@mui/material";

const HeaderComponent = ({onCreate}) => {
    return (
        <React.Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <nav>
                    <Button
                        className="create-button"
                        variant="contained"
                        color="grey"
                        onClick={onCreate}
                    >
                        Create New Post
                    </Button>
                </nav>
            </header>
        </React.Fragment>
    );
}

export default HeaderComponent;