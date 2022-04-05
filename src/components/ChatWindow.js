import { useState } from 'react'
// import Button from 'react-bootstrap/Button'

const ChatWindow = () => {
    return (
        <div className='chatWindow'>
            <div className='chat-top'>
                <header className='text-center'>
                    CHAT
                </header>
            </div>
            
            <div className='chat-mid'>
                <div className='chat-mid-messages'>
                    <ul class='chat-messages'>
                        <li>
                            <span style={{ color: 'yellow' }}>User1</span>: This is a placeholder message.
                        </li>
                        <li>
                            <span style={{ color: 'magenta' }}>User2</span>: Hello World!
                        </li>
                        <li style={{ color: 'grey' }}>
                            User3 has joined the canvas.
                        </li>
                        <li>
                            <span style={{ color: 'green' }}>User3</span>: My name is User3.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='chat-bot'>
                <div className='chat-bot-div'>
                    <form class='chat-bot-form' action=''>
                        <input class='chat-input' autocomplete='off' placeholder='Send a message...' />
                        <button onClick={(e) => {e.preventDefault()}}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatWindow
