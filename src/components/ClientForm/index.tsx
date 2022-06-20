import { Container, ClientsButton, Summary } from './style';
import { FormEvent, useState } from 'react';
import { useClients } from '../../hooks/useClients';
import logoImg from '../../assets/logo.svg'

interface PopUpProps {
  onOpenPopUp: () => void;
}

export function ClientForm ({onOpenPopUp}: PopUpProps){

  function clearData(){
    setName('');
    setEmail('');
    setAddress('');
    setPhone('');
    setProfession('');
  }

  const { createClientForm } = useClients();
  
  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [address, setAddress ] = useState('');
  const [phone, setPhone ] = useState('');
  const [profession, setProfession ] = useState('');
  
async function handleCreateNewClient(event: FormEvent ) {
    event.preventDefault();

    await createClientForm({
      name,
      email,
      address,
      phone,
      profession,
    })

    clearData();

  }
  
  return (
    <Summary>      
      <Container onSubmit={handleCreateNewClient}>  
        <h2>CADASTRAR CLIENTE</h2>
        
        <input
          placeholder='Name'
          value={name} // salvar valor do title 
          onChange={event => setName(event.target.value)} // qualquer todas as vezes que o valor do campo for modificado
        />
        
        <input 
          type="email"
          placeholder='Email'
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <input 
          type="text"
          placeholder='Address'
          value={address}
          onChange={event => setAddress(event.target.value)}
        />

        <input 
          type="tel"
          placeholder='Phone'
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />

        <input 
          type="text"
          placeholder='Profession'
          value={profession}
          onChange={event => setProfession(event.target.value)}
        />

        <ClientsButton>      
          <button
            type="button"  onClick={() => clearData()}>
            Limpar
          </button>

          <button
            type="submit"
            onClick={onOpenPopUp}>
            Cadastrar
          </button>
        </ClientsButton>
      </Container>
      <div>
        <div className='infor'>
          <img src={logoImg} alt="Saídas" />
          <p>Desafio Proposto por CloudOpss</p>
        </div>
      </div>
    </Summary>
    )
  }