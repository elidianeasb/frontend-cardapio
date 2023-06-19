import { useState } from "react";
import { addFood } from "../client/CardapioServer";

interface AddFoodProps {
    foodCreated: () => void
}

function AddFood({foodCreated}: AddFoodProps) {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const [isAdding, setIsAdding] = useState(false)

    const addNewFood = () => {
        addFood(title, price, image).then((response) => {
            console.log(response)
            foodCreated()
            setTitle('')
            setPrice(0)
            setImage('')
        })
    }
    const openInput = () => {
        setIsAdding(true)
    }

    return isAdding ? (
        <div className="input-overlay">
            <div className="input-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <input value={title} type="text" onChange={(event) => setTitle(event.target.value)} />
                    <input value={price} type="number" onChange={(event) => setPrice(event.target.valueAsNumber)}/>
                    <input value={image} type="text" onChange={(event) => setImage(event.target.value)} />
                    <button onClick={addNewFood} className="btn-secondary">Adicionar novo item</button>
                    <button className="btn-close">Fechar</button>
                </form>
            </div>
        </div>

    ) : (
        <button onClick={openInput} className="btn-add">Adicionar</button>
    )
}

export default AddFood