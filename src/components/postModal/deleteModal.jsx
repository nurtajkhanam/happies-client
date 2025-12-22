import { Dialog } from "@mui/material";
import "./deleteModal.css";

function DeleteModal({ isAlert, closeAlert }) {
  return (
    <>
      <Dialog
        className="dialog-alert"
        fullWidth
        open={isAlert}
        onClose={closeAlert}
      >
        <div className="delete-modal-container">
          <div className="alert-box">
            <div className="alert-ques"> Are You Sure?</div>
            <div className="alert-message">
              Once you delete the post, You won't see it anymore.
            </div>
          </div>
          <div className="delete-modal-cta-btn">
            <button className="yes-btn">Yes</button>
            <button onClick={closeAlert} className="no-btn">
              No
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
export default DeleteModal;
