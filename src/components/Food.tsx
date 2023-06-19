interface FoodProps {
    title: string,
    price: number,
    image: string
}

function Food({ price, title, image }: FoodProps) {
    return (
        <div className="card">
            <img src={image} alt="" />
            <p>{title}</p>
            <p><b>R$: {price} </b></p>
        </div>
    )
}
export default Food
