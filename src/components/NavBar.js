import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState } from 'react'


function NavBarComponent() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-commerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
            <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h2>body</h2>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBarComponent;
