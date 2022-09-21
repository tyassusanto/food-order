import Card from '../UI/Card';
import styles from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Espresso',
        description: 'one shot 100% premium Arabika coffee McCafe',
        price: 18,
    },
    {
        id: 'm2',
        name: 'Cappuccino',
        description: 'Perfect combination between espresso, steamed milk, and foam',
        price: 20,
    },
    {
        id: 'm3',
        name: 'Cheese Croissant',
        description: 'crunchy croissant with melted cheese',
        price: 15,
    },
    {
        id: 'm4',
        name: 'Banana Muffin',
        description: 'smooth React banana Muffin',
        price: 14,
    },
    {
        id: 'm5',
        name: 'French Fries',
        description: 'crispy and salty french fries',
        price: 11,
    },
];

// import React, { Fragment } from 'react'

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ))
    return <section className={styles.meals}>
        <Card>
            <ul>{mealsList}</ul>
        </Card>
    </section>
}

export default AvailableMeals