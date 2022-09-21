import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = (props) => {

    const cartCrx = useContext(CartContext)

    const price = `Rp. ${props.price.toFixed(2)}`

    const handleAddToCart = (amount) => {
        cartCrx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={handleAddToCart}/>
            </div>
        </li>
    )
}

export default MealItem