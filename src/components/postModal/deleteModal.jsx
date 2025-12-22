import { Dialog } from "@mui/material";
import "./deleteModal.css";

function DeleteModal({ isAlert, handleCloseAlert }) {
  return (
    <>
      <Dialog
        className="dialog-alert"
        fullWidth
        open={isAlert}
        onClose={handleCloseAlert}
      >
        <div className="delete-modal-container">
          <div className="alert-box">
            <div className="alert-title"> Are You Sure?</div>
            <div className="alert-message">
              Once you delete the post, You won't see it anymore.
            </div>
          </div>
          <div className="delete-modal-cta-btn">
            <button onClick={handleCloseAlert} className="cta-btn">
              Yes
            </button>
            <button onClick={handleCloseAlert} className="cta-btn">
              No
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
export default DeleteModal;
