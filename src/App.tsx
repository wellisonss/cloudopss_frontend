import { GlocalStyle } from "./styles/global";
import Modal from "react-modal"
import { ClientsProvider } from "./hooks/useClients";
import { PopUpModal } from "./components/PopUpModal";
import { useState } from "react";
import { ClientForm } from "./components/ClientForm";

Modal.setAppElement('#root');

function App() {

  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);

  function handleOpenNewClientModal () {

    setIsNewClientModalOpen(true);

  }

  function handleCloseNewClientModal () {

    setIsNewClientModalOpen(false);
    
  }

  return (
    <ClientsProvider >
    
    <ClientForm onOpenPopUp={handleOpenNewClientModal}/>

    <PopUpModal 
         isOpen = {isNewClientModalOpen}
         onRequestClose = {handleCloseNewClientModal}
    />
    <GlocalStyle />
    </ClientsProvider>
  ); 

}

export default App
