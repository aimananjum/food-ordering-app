import Card from '../UI/Card';
import MealItem from './MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Biriyani',
        description: 'Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice.',
        price: 500,
    },
    {
        id: 'm2',
        name: 'Shahi Egg Curry',
        description: 'Here is a mildly-spiced egg curry made with garlic, onions, a whole lot of kasuri methi, fresh cream, yogurt and fresh coriander',
        price: 400,
    },
    {
        id: 'm3',
        name: 'Dal Makhani',
        description: 'Dal Makhani is a quintessential Indian dish with many variations found in different regions of our country as well as abroad',
        price: 300.00,
    },
    {
        id: 'm4',
        name: 'Butter Chicken',
        description: 'Butter chicken is a hot favourite with most Indian non-vegetarians. The quintessential chicken curry has become popular around the world',
        price: 600,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;