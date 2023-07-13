import { FaCross } from "react-icons/fa";

export const Dialog = ({ children, open, onClose }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={open}
        id="my-modal-6"
        className="modal-toggle "
      />
      <div className="modal ">
        <div className="modal-box ">
          <div>
            <button onClick={onClose}>{<FaCross />}</button>
            {children}
          </div>
        </div>
      </div>
      ;
    </>
  );
};
