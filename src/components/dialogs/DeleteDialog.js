import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

const DeleteDialog = ({ open, post, onClose, onDelete }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{"Do you really want to delete " + post.title + " post?"}</DialogTitle>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
                <Button onClick={onDelete} autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;