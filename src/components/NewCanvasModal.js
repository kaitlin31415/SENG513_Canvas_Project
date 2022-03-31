import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const NewCanvasModal = () => {
    let navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [newCanvasName, setnewCanvasName] = useState("");

    const handleClose = () => setShow(false);

    const handleCreate = (e) => {
        e.preventDefault();

        if (!newCanvasName) {
            alert('Please enter a canvas name.')
            return
        }

        navigate('/canvas');
    }

    return ( 
        <div className='newCanvas'>
            <Button style={{ color: 'white' }} onClick={() => setShow(true)}>
                +
            </Button>
            <Modal show={show} backdrop='static' onHide={handleClose} centered>
                <Modal.Header className='modal-header'>
                    <Modal.Title>New Canvas</Modal.Title>
                    <Button variant='primary' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control className='mb-3' type='text' placeholder='Enter canvas name here...' value={newCanvasName} onChange={(e) => setnewCanvasName(e.target.value)} />
                        </Form.Group>
                        <Button type='submit' onClick={handleCreate}>Create & Open Canvas</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default NewCanvasModal
