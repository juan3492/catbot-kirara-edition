import React from 'react'
import './InputChat.css'

const InputChat = ({ sendMessage, getMessage, msg, chat }) => {
    return(
        <form 
        onSubmit={ (e) => sendMessage(e) }
        className="chatbot-chat-input-container">
            <input 
            disabled={chat.length >= 3 ? true : false}
            placeholder={chat.length >= 3 ? 'Kirara tiro el input y se rompió.' : 'Escribí tu nombre.'}
            value={msg.msg}
            type="text"
            onChange={ (e) => getMessage(e.target.value) }
            />
            <button
            type='submit'
            disabled={chat.length >= 3 ? true : false}
            />
        </form>
    )
};

export default InputChat;