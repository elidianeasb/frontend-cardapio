import axios from "axios";


export function getAllFoods() {
    const promise = new Promise<Food[]>((resolve, reject) => {
        axios.get('http://localhost:8080/food')
        .then((response) => {
            resolve(response.data)
        }).catch((error) => {
            console.error(error)
            reject(error)
        })
    })    
    return promise
}

export function addFood(title: String, price: Number, image: String) {
    const promise = new Promise<Food[]>((resolve, reject) => {
        axios.post('http://localhost:8080/food', {
            "title": title,
            "price": price,
            "image": image
        })
        .then((response) => {
            resolve(response.data)
        }).catch((error) => {
            console.error(error)
            reject(error)
        })
    })    
    return promise
}


export function deleteFoodById(foodId: Number | String) {
    const promise = new Promise<Food[]>((resolve, reject) => {
        axios.delete(`http://localhost:8080/food/${foodId}`)
        .then((response) => {
            resolve(response.data)
        }).catch((error) => {
            console.error(error)
            reject(error)
        })
    })    
    return promise
}