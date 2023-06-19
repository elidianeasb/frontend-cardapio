import { useState } from "react";
import { deleteFoodById } from "../client/CardapioServer"
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

interface FoodProps {
    food: Food,
    foodDeleted: () => void
}

function Food({ food, foodDeleted }: FoodProps) {

    const [isClicked, setIsClicked] = useState(false)

    const deleteFood = () => {
        deleteFoodById(food.id)
            .then(() => {
                foodDeleted()
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const showIcons = () => {
        setIsClicked((prev) => {
            return !prev
        })
    }

    console.log(isClicked)
    return isClicked ? (
        <div className="card" onClick={showIcons}>
            <img src={food.image} alt="" />
            <p>{food.title}</p>
            <p><b>R$: {food.price} </b></p>
            <div>
                <FaTrash onClick={deleteFood} className='icon' />
            </div>
        </div>
    ) : (
        <div className="card" onClick={showIcons}>
            <img src={food.image} alt="" />
            <p>{food.title}</p>
            <p><b>R$: {food.price} </b></p>
        </div>

    )
}
export default Food
