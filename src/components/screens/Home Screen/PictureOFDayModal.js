import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PictureOFDayModal = ({ state, close }) => {
    return (
        <Modal show={state} size="lg" centered>
            <Modal.Header>
                <Modal.Title>Picture of the day</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>How to use the picture of the day?</h4>
                <p> The page initial in picture of the day contains in first place "the picture of the day" but also you can look a picture of a coustom date to through of form that it show when you make click in "find up" button.</p>
                <h5>For example:</h5>
                <div className="row">
                    <img src="./exampledate.png" alt="d-block" />
                </div>
                <p className="text-danger mt-3">The button "submit" only will aviable when you fill success the formulary, always into the format YYYY/MM/DD</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Link to="/PictureOFDay" variant="primary" onClick={close}>
                    Try now
                </Link>
            </Modal.Footer>
        </Modal>
    )
}
