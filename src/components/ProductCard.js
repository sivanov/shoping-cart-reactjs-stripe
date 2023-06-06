
import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from 'react'


// props.product is the product that we selling
function ProductCard(props){
    const product = props.product
    const cart = useContext(CartContext)
    const getProductQuantity = cart.getProductQuantity(product.id)

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                { getProductQuantity > 0 ?  
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">
                                In Cart {getProductQuantity}
                            </Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className='mx-2'>+</Button>
                                <Button sm="6"  onClick={() => cart.removeOneFromCart(product.id)} className='mx-2'>-</Button>
                            </Col>
                            <Button variant='danger' onClick={() => cart.deleteFromCart(product.id)} className='my-2'>Remove from Cart</Button>
                        </Form>
                    </>
                    : <Button variant='primary' onClick={() => cart.addOneToCart(product.id)} >Add to Cart</Button> 
                }
                {/* <Button 
                    variant="primary"
                    onClick={() => cart.addOneToCart(product.id)}
                >
                    Add To Cart
                </Button> */}
            </Card.Body>
        </Card>
    )
}

export default ProductCard