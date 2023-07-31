import React from "react";
import AccordionComponent from "./AccordionComponent";


const PostsContentComponent = ({posts, onEdit, onDelete}) => {
    return (
        <React.Fragment>
            {posts.map(post => (
                <AccordionComponent
                    post={post}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </React.Fragment>
    )
}

export default PostsContentComponent;