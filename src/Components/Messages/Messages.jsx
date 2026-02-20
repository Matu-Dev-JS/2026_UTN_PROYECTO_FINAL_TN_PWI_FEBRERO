import React from 'react'

const Messages = ({contact_selected}) => {
    return (
        <div>
            {
                contact_selected.messages.map(message => {
                    return (
                        <div key={message.id}>
                            {
                                message.send_by_me
                                    ? <h3>Enviado mi</h3>
                                    : <h3>Enviado por: {contact_selected.name}</h3>
                            }
                            <p>{message.text}</p>
                            <span>{message.time}</span>
                            <hr />
                        </div>
                    )
                })}
        </div>
    )
}

export default Messages