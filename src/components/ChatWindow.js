import React, { useState, useContext, useEffect } from "react";

const ChatWindow = (props) => {
    const [inputVal, setInputVal] = useState('')
    
    // true if input is not whitespace
    const valid = (input) => {
        if (input && input.trim().length > 0) {
            return true
        } else {
            return false
        }
    }

    // if msg is valid, send message
    const sendMessage = (e, msg) => {
        e.preventDefault()
        if (valid(msg)) {
            props.handleSendMsg(msg)
            setInputVal('')
        }
    }
    
    return (
        <div className='chatWindow'>
            <div className='chat-top'>
                <header className='text-center'>
                    CHAT
                </header>
            </div>
            
            <div className='chat-mid'>
                <div className='chat-div-messages'>
                    <ul id='chat-messages' />
                </div>
            </div>

            <div className='chat-bot'>
                <div className='chat-bot-div'>
                    <form className='chat-bot-form' action=''>
                        <input id='chat-input' autoComplete='off' placeholder='Send a message...' value={inputVal} onChange={e => setInputVal(e.target.value)} />
                        <button type='submit' onClick={e => sendMessage(e, inputVal)}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatWindow
