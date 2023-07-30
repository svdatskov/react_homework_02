import DeleteDialog from "./dialogs/DeleteDialog";
import EditDialog from "./dialogs/EditDialog";
import CreateDialog from "./dialogs/CreateDialog";
import React, {useState} from "react";
import HeaderComponent from "./HeaderComponent";
import PostsContentComponent from "./PostsContentComponent";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

const PostsServiceComponent = ({posts, onDelete, onEdit, onCreate}) => {
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [createDialogOpen, setCreateDialogOpen] = useState(false);
    const [newPost, setNewPost] = useState({title: "", body: ""});
    const [selectedPost, setSelectedPost] = useState({});

    const handleOpenDeleteDialog = (post) => {
        setSelectedPost(post);
        setDeleteDialogOpen(true);
    };

    const handleCloseDeleteDialog = () => {
        setSelectedPost({});
        setDeleteDialogOpen(false);
    };

    const handleDelete = () => {
        onDelete(selectedPost);
        handleCloseDeleteDialog();
    };

    const handleOpenEditDialog = (post) => {
        setSelectedPost(post);
        setEditDialogOpen(true);
    };

    const handleCloseEditDialog = () => {
        setSelectedPost({});
        setEditDialogOpen(false);
    };

    const handleSaveEdit = () => {
        onEdit(selectedPost);
        handleCloseEditDialog();
    };

    const handleInputChangeEdit = (e) => {
        const {name, value} = e.target;
        setSelectedPost(prevPost => ({...prevPost, [name]: value}));
    };

    const handleOpenCreateDialog = () => {
        setCreateDialogOpen(true);
    };

    const handleCloseCreateDialog = () => {
        setCreateDialogOpen(false);
        setNewPost({title: "", body: ""});
    };

    const handleInputChangeCreate = (e) => {
        const {name, value} = e.target;
        setNewPost((prevPost) => ({...prevPost, [name]: value}));
    };

    const handleSaveNewPost = () => {
        onCreate({...newPost, id: generateUniqueID});
        handleCloseCreateDialog();
    };

    return (
        <React.Fragment>
            <DeleteDialog
                open={deleteDialogOpen}
                post={selectedPost}
                onClose={handleCloseDeleteDialog}
                onDelete={handleDelete}
            />
            <EditDialog
                open={editDialogOpen}
                post={selectedPost}
                onClose={handleCloseEditDialog}
                onSave={handleSaveEdit}
                onInputChange={handleInputChangeEdit}
            />
            <CreateDialog
                open={createDialogOpen}
                onClose={handleCloseCreateDialog}
                onSave={handleSaveNewPost}
                onInputChange={handleInputChangeCreate}
            />
            <HeaderComponent onCreate={handleOpenCreateDialog}/>
            <PostsContentComponent
                posts={posts}
                onEdit={handleOpenEditDialog}
                onDelete={handleOpenDeleteDialog}/>
        </React.Fragment>
    );
}

export default PostsServiceComponent;