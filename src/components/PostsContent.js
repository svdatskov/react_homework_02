import React from "react";
import AccordionComponent from "./AccordionComponent";


const PostsContent = ({posts}) => {
    return (
        <React.Fragment>
            {posts.map(post => (
                <AccordionComponent props={post} />
            ))}
        </React.Fragment>
    )
}

export default PostsContent;