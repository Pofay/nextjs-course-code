const Modal = ({ onConfirm, onCancel }) => {
  return (
    <div className='modal'>
      <p>Confirm Item Deletion for Todo?</p>
      <button className='btn btn--alt' onClick={onCancel}>
        Cancel
      </button>
      <button className='btn' onClick={onConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
