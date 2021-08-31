import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NeowsModal = ( {statetwo, close} ) => {
    return (
        <Modal show={statetwo} onHide={ close } size="lg" centered>
            <Modal.Header>
                <Modal.Title>modal2</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Link to='/AsteroidsNeoWs' variant="primary" onClick={close}>
                    Try now
                </Link>
            </Modal.Footer>
        </Modal>
    )
}
