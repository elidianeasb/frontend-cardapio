import Food from './Food'

interface FoodListProps {
    foods: Food[]
}

function FoodList({ foods }: FoodListProps) {
    console.log(foods)
    return (
        <div  className="card-grid">
            {
                foods.map((food, index) => (
                    <Food key={index} title={food.title} price={food.price} image={food.image} />
                ))
            }
        </div>
    )
}

export default FoodList