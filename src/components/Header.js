import React from "react";
import logo from "../logo.svg";
import {Button} from "@mui/material";

const Header = () => {
    return (
        <React.Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <nav>
                    <Button
                        className="create-button"
                        variant="contained"
                        color="grey"
                    >
                        Create New Post
                    </Button>
                </nav>
            </header>
        </React.Fragment>
    );
}

export default Header;