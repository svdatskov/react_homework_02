import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import PostsContent from "./components/PostsContent";
import {Button} from "@mui/material";
import Header from "./components/Header";

function App() {
    const [posts, setPosts] = useState([]);

    const fetchPostData = () => fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));

    useEffect(() => {
        fetchPostData()
    }, [])

    return (
        <React.Fragment>
            <Header />
            <PostsContent posts={posts}/>
        </React.Fragment>
    );
}

export default App;
