import { createContext, ReactNode, useContext } from "react";
import { api } from "../services/api";


interface Client{
  name: string,
  email: string,
  address: string,
  phone: string,
  profession: string,
}

type ClientInput = Client;

interface ClientsProviderProps{
  children: ReactNode,
}

interface ClientContextData{
  createClientForm: (Client: ClientInput) => Promise<void>;
}

const ClientsContext = createContext<ClientContextData>(
  {} as ClientContextData
  );

export function ClientsProvider({ children } : ClientsProviderProps) {

  async function createClientForm(ClientInput: ClientInput){

    await api.post('clients', {
      name: ClientInput.name,
      email: ClientInput.email,
      address: ClientInput.address,
      phone: ClientInput.phone,
      profession: ClientInput.profession,
      id: 4
     })
     .then(() => {
      console.log("deu certo")
    })
    .catch(() => {
        console.log("deu errado")
    })
    }

  return (
    <ClientsContext.Provider value={{ createClientForm }}>
      {children}
    </ClientsContext.Provider>
  )

}

export function useClients(){

  const context = useContext(ClientsContext);

  return context;
} 