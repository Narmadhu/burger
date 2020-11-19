import React,{useState} from 'react';
import Auxilary from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

 const INGREDIENTS_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.5,
    bacon:0.7,
}


function BurgerBuilder() {

    const [ingredients, setingredients] = useState({
        salad:0,
        meat:0,
        bacon:0,
        cheese:0
    })
    const [totalPrice, setTotalPrice] = useState(4)

   const addIngredientHandler=( type )=>{
          const oldCount = ingredients[type];
          const updatedCount = oldCount + 1;
          const updatedIngredients = {
              ...ingredients
          }
          updatedIngredients[type]=updatedCount;
          const priceAddition = INGREDIENTS_PRICES[type];
          const oldPrice = totalPrice;
          const newPrice = oldPrice + priceAddition;
          setTotalPrice(newPrice)
          setingredients(updatedIngredients)

   }

//     const removeIngredient=( type )=>{

//    }

    return (
        <Auxilary>
        <Burger ingredients={ingredients} />
        <BuildControls 
        addedIngredient={addIngredientHandler}
         />
        </Auxilary>
    )
}

export default BurgerBuilder;
