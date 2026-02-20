import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'


const NewMessageForm = ({contact_id}) => {


    const {addNewMessage} = useContext(ContactsContext)
    /* 
    Logica para capturar campos del formulario
    */
    function handleSubmitNewMessage(event) {
        event.preventDefault()
        /* 
        event.target es una refencia al elemento del HTML que desencadeno el evento
        */
        const new_message = event.target.nuevo_mensaje.value
        addNewMessage(contact_id, new_message)
    }

    return (
        <div>
            <form onSubmit={handleSubmitNewMessage}>
                <label htmlFor='nuevo_mensaje'>Nuevo mensaje</label>
                <textarea placeholder='Escribe un mensaje...' id='nuevo_mensaje' name='nuevo_mensaje' required />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default NewMessageForm


function EjemploDeTargetConBotones() {
    /* Si pones esto en el TP deja de copiar y pegar 🤬 */
    function handleClickDummy(event) {
        console.log(event.target)
    }
    return (
        <>
            <button id='circulo' onClick={handleClickDummy}>
                Click
            </button>
            <button id='linea' onClick={handleClickDummy}>
                Click
            </button>
            <button id='cuadrado' onClick={handleClickDummy}>
                Click
            </button>
        </>
    )
}
