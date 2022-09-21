import React, { Fragment, useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    const [btnHighlight, setBtnHighlight] = useState(false)

    const cartCtx = useContext(CartContext)

    const { items } = cartCtx

    const numberOfCart = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    const btnStyles = `${styles.button} ${btnHighlight ? styles.bump : ''}`

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return
        }
        setBtnHighlight(true)

        const timer = setTimeout(() => {
            setBtnHighlight(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items])

    return (
        <Fragment>
            <button className={btnStyles} onClick={props.onClick}>
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