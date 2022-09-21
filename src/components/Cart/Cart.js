import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'
import CartItem from './CartItem'

const Cart = (props) => {

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItem = cartCtx.items.length > 0

    const handleRemoveItemFromCart = (id) => {

    }

    const handleAddItemToCart = (item) => {

    } 

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={handleRemoveItemFromCart.bind(null, item.id)}
                    onAdd={handleAddItemToCart.bind(null, item)}
                />
            ))}
        </ul>
    )

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
                {hasItem && <button className={styles.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart