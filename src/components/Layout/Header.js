import React, { Fragment } from 'react'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactCoffee</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" alt="Pizza Limo" />
            </div>
        </Fragment>
    )
}

export default Header