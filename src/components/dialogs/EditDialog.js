import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    InputLabel,
} from "@mui/material";

const EditDialog = ({ open, post, onClose, onSave, onInputChange }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit {post.title}</DialogTitle>
            <DialogContent>
                <InputLabel>Title</InputLabel>
                <TextField
                    name="title"
                    value={post.title}
                    onChange={onInputChange}
                />
                <InputLabel>Text</InputLabel>
                <TextField
                    name="text"
                    value={post.body}
                    onChange={onInputChange}
                    multiline
                    rows={6}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditDialog;