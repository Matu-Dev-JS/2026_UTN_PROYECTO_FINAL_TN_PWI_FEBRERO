import { createContext, useState } from "react";
import { getContacts } from "../services/contactsService";

//Creamos el contexto y lo exportamos porque luego quien
//quiera consumirlo lo va a necesitar
export const ContactsContext = createContext(
    //Representa el valor inicial del contexto, es decir, lo que va devolver el contexto por defecto, nos sirve para saber que propiedades va a tener el contexto, aunque luego se van a modificar
    {
        contacts: [],
        favorite_name: '',
        addNewMessage: (contact_id, new_message) => { }
    }
)

/* 
la prop children es una prop reservada de react
Representa a todos los componentes hijos que se encuentran dentro del componente 
*/
const ContactsContextProvider = ({ children }) => {
    const contacts = getContacts()
    const [contactsState, setContactsState] = useState(contacts)

    function addNewMessage(contact_id, new_message) {
        //Logica de agregado de un mensaje a un cierto contacto del estado de contactos
        //Recordatorio IMPORTANTISIMO: Los estados son INMUTABLES
        //contactsState es un array de contacts
        //Si quiero modificar el estado previo de un estado que tipo de dato deberia pasar por el setter? Una funcion / Callback

        setContactsState(
            (currentContactState) => {
                //Variante 1: Sintaxis mas moderna y parecida a lo que se usa hoy en dia
                /* return [...currentContactState].map(
                    (contact) => {
                        if (Number(contact.id) === Number(contact_id)) {
                            contact.messages.push({
                                id: contact.messages.length + 1,
                                text: new_message,
                                send_by_me: true, 
                                created_at: new Date().toISOString(),
                                is_read: false
                            },)
                        }
                        return contact
                    }
                ) */

                //Variante 2: mas parecida a lo que vimos en JS
                const cloned_state = [...currentContactState]

                for(const contact of cloned_state){
                    if (Number(contact.id) === Number(contact_id)) {
                        contact.messages.push({
                            id: contact.messages.length + 1,
                            text: new_message,
                            send_by_me: true, 
                            created_at: new Date().toISOString(),
                            is_read: false
                        })
                    }
                }
                return cloned_state
            }
        )

    }

    const provider_values = {
        contacts: contactsState,
        favorite_name: 'pepe',
        addNewMessage
    }


    return (
        /* 
        Creamos el proveedor de contexto y pasamos la prop value que es basicamente lo que se podra consumir del contexto
        */
        <ContactsContext.Provider
            value={provider_values}
        >
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider