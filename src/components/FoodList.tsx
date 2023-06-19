import Food from './Food'

interface FoodListProps {
    foods: Food[]
    foodDeleted: () => void
}

function FoodList({ foods, foodDeleted }: FoodListProps) {
    console.log(foods)
    return (
        <div  className="card-grid">
            {
                foods.map((food, index) => (
                    <Food key={index} food={food} foodDeleted={foodDeleted}/>
                ))
            }
        </div>
    )
}

export default FoodList