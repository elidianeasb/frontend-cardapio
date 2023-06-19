import './App.css'
import { getAllFoods } from './client/CardapioServer';
import { useEffect, useState } from 'react';
import FoodList from './components/FoodList';
import AddFood from './components/addFood';


declare global {
  interface Food {
    id?: number,
    title: string,
    price: number,
    image: string
  }
}

function App() {

  const [foods, setFoods] = useState<Food[]>([])

  useEffect(() => {
    getAllFoods().then((foods) => {
      setFoods(foods)
    }).catch((message) => {
      console.error(message)
    })
  }, [])

  const allFoods = () => {
    getAllFoods().then((foods) => {
      setFoods(foods)
    }).catch((message) => {
      console.error(message)
    })
  }


  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <div>
        <FoodList foods={foods}/>
        <AddFood foodCreated={allFoods}/>
      </div>
    </div>
  )
}

export default App
