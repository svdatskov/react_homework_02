import DeleteDialog from "./dialogs/DeleteDialog";
import EditDialog from "./dialogs/EditDialog";
import CreateDialog from "./dialogs/CreateDialog";
import React, {useState} from "react";
import HeaderComponent from "./HeaderComponent";
import PostsContentComponent from "./PostsContentComponent";

const PostsServiceComponent = ({posts, onDelete, onEdit, onCreate}) => {
    const [isEditDialogOpen, setEditDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);
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

    const handleDeletePost = () => {
        handleCloseDeleteDialog();
        onDelete(selectedPost);
    };

    const handleOpenEditDialog = (post) => {
        setEditDialogOpen(true);
        setSelectedPost(post);
    };

    const handleCloseEditDialog = () => {
        setEditDialogOpen(false);
        setSelectedPost({});
    };

    const handleEditPost = () => {
        handleCloseEditDialog();
        onEdit(selectedPost);
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
        onCreate({...newPost, id: Math.floor(1000 + Math.random() * 9000)});
        handleCloseCreateDialog();
    };

    return (
        <React.Fragment>
            <DeleteDialog
                open={isDeleteDialogOpen}
                post={selectedPost}
                onClose={handleCloseDeleteDialog}
                onDelete={handleDeletePost}
            />
            <EditDialog
                open={isEditDialogOpen}
                post={selectedPost}
                onClose={handleCloseEditDialog}
                onSave={handleEditPost}
                onInputChange={handleInputChangeEdit}
            />
            <CreateDialog
                open={isCreateDialogOpen}
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