import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";
import PostsContentComponent from "./components/PostsContentComponent";
import {Button} from "@mui/material";
import HeaderComponent from "./components/HeaderComponent";
import PostsServiceComponent from "./components/PostsServiceComponent";

function App() {
    const [posts, setPosts] = useState([]);

    const fetchPostData = () => fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));

    useEffect(() => {
        fetchPostData()
    }, [])

    const handleCreateElement = (post) => {
        setPosts((prevData) => [...prevData, post]);
    };

    const handleEditElement = (editedPost) => {
        setPosts((prevData) =>
            prevData.map(post => (post.id === editedPost.id ? editedPost : post))
        );
    };

    const handleDeleteElement = (deletedPost) => {
        setPosts((prevData) =>
            prevData.filter(post => post.id !== deletedPost.id));
    };

    return (
        <React.Fragment>
            <PostsServiceComponent
                posts={posts}
                onCreate={handleCreateElement}
                onEdit={handleEditElement}
                onDelete={handleDeleteElement}
            />
        </React.Fragment>
    );
}

export default App;
