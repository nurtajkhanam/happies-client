import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import "./postModal.css";

function PostModal({ isOpen, handleClose }) {
  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      <div className="post-modal">
        <DialogTitle
          sx={{
            paddingLeft: 0,
          }}
        >
          Create Post
        </DialogTitle>

        <div>
          <div className="input-container">
            <TextField fullWidth label="Title" />
          </div>

          <div className="input-container">
            <TextField
              fullWidth
              label="Post"
              placeholder="What's on your mind?"
              multiline
              minRows={4}
              maxRows={8}
            />
          </div>
        </div>

        <div className="post-modal-cta-container">
          <button onClick={handleClose} className="post-modal-submit-btn">
            Submit
          </button>
          <button onClick={handleClose} className="post-modal-cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </Dialog>
  );
}

export default PostModal;
