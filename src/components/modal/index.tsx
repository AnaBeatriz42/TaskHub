import React, { ReactNode, ReactElement } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

type CustomModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
};

const customStyles = {
  content: {
    width: '400px',
    maxHeight: '80%',
    margin: 'auto',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#a09be0',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    color: 'black',
  },
};

function CustomModal({ isOpen, closeModal, children }: CustomModalProps): ReactElement {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={customStyles as Modal.Styles} 
    >
      <button
        onClick={closeModal}
        style={customStyles.closeButton}
      >
        <span>&times;</span>
      </button>
      {children}
    </Modal>
  );
}

export default CustomModal;
