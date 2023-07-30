import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    InputLabel,
} from "@mui/material";

const CreateDialog = ({ open, onClose, onSave, onInputChange }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Create New Post</DialogTitle>
            <DialogContent>
                <InputLabel>Title</InputLabel>
                <TextField name="title" onChange={onInputChange} fullWidth />
                <InputLabel>Text</InputLabel>
                <TextField
                    name="body"
                    onChange={onInputChange}
                    fullWidth
                    multiline
                    rows={4}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
                <Button onClick={onSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateDialog;