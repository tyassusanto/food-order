import React, { Fragment, useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext)

    // const numberOfCart = cartCtx.items.length
    const numberOfCart = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    return (
        <Fragment>
            <button className={styles.button} onClick={props.onClick}>
                <span className={styles.icon}>
                    <CartIcon />
                </span>
                <span>
                    Your Cart
                </span>
                <span className={styles.badge}>
                    {numberOfCart}
                </span>
            </button>
        </Fragment>
    )
}

export default HeaderCartButton