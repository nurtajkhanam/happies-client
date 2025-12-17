import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import "./postModal.css";
import { useState } from "react";

function PostModal({ isOpen, handleClose, action, data }) {
  const [title, setTitle] = useState(data?.title);
  const [content, setContent] = useState(data?.content);

  return (
    <Dialog open={isOpen} onClose={handleClose} fullWidth>
      <div className="post-modal">
        <DialogTitle
          sx={{
            paddingLeft: 0,
          }}
        >
          {action === "create" ? "Create" : "Update"} Post
        </DialogTitle>

        <div>
          <div className="input-container">
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className="input-container">
            <TextField
              fullWidth
              label="Post"
              placeholder="What's on your mind?"
              multiline
              minRows={4}
              maxRows={8}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="post-modal-cta-container">
          <button onClick={handleClose} className="post-modal-submit-btn">
            {action === "create" ? "Submit" : "Update"}
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
