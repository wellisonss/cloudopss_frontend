import { Container } from './style';
import Modal from 'react-modal'

interface PopUpProps {
    isOpen: boolean;
    onRequestClose: () => void;
  }

export function PopUpModal ({ isOpen, onRequestClose }:PopUpProps){

    return (
        <Modal 
          isOpen={isOpen} 
          onRequestClose={onRequestClose}
          overlayClassName="overlay-popup"
          className="content-popup"
        >
          <Container>
          <h1> CONFIRMADO! </h1>
          
          <button 
            type='button' 
            onClick={onRequestClose} 
          > OK </button>
          </Container>
        </Modal>
        )

}