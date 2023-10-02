import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../Button/Button";
import './Modal.css'


export default function ModalPop(props) {
  return (
    <>
      <Modal show={props.showModal} onHide={props.closeModal} backdrop="static">
        {/* <Modal.Header closeButton>
          <Modal.Title>Registration Succesful</Modal.Title>
        </Modal.Header> */}
        <Modal.Body >
          <div className="modal-image">
            <div className="successfulTick"></div>
            <div className="successfulMan"></div>
          </div>
          <div className="modal-header d-flex">
            <span className="col-12">Congratulations</span>
            <span className="col-12">you have succesfully Registered!</span>
          </div>
          <div className="modal-sub d-flex">
            <span className="col-12">Yes, it's easy and you did it.</span>
            <span className="col-12">check your mail box for next step</span>
          </div>
          <Button name="Back" onClick={props.closeModal} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button name="Back" onClick={props.closeModal}/>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}