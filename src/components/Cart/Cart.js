import React from 'react'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'

const Cart = (props) => {

    const cartItem = <ul>{[
        { id: 'c1', name: 'sushi', amount: 2, price: 12.99 },
    ].map((item) => <li>{item.name}</li>)}</ul>

    return (
        <Modal>
            {cartItem}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>50.000</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart