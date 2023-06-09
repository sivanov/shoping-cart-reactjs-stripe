import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState } from "react";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import CartProduct from "./CartProduct";

function NavBarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("cart items: ", cart.items);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  console.log("productsCount:", productsCount);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((res) => {
      return res.json()
    }).then((res) => {
      if(res.url) {
        // forwarding user to Stripe
        window.location.assign(res.url)
      }
    })
  }

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-commerce Store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}

              <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
              <Button 
                variant="success"
                onClick={checkout}
              >
                Purchase items!
              </Button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBarComponent;
