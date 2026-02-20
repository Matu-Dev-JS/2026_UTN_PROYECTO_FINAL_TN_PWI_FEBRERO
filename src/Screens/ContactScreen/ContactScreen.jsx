import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import NewMessageForm from '../../Components/NewMessageForm/NewMessageForm'
import Messages from '../../Components/Messages/Messages'

export default function ContactScreen() {
  const {contacts} = useContext(ContactsContext)

  //Obtengo el id del contacto seleccionado a traves de los parametros de la url
  const {contact_id} = useParams()

  //Busco el contacto seleccionado en la lista de contactos
  const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))

  return (
    <div>
      <ContactSidebar />
      {/* Si el contacto seleccionado no existe, muestro un mensaje si no, muestro el contacto */}
      {
        ! contact_selected 
        ? <div>
            <h1>El contacto seleccionado no existe</h1>
        </div>
        : <div>
          <h1>
            El contacto seleccionado es: {contact_selected.name  }
          </h1>
          <Messages contact_selected={contact_selected} />
          <NewMessageForm contact_id={contact_id} />
        </div>
      }
      
    </div>
  )
}
