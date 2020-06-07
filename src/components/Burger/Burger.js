import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients) // [salad, bacon, cheese, meat]
  .map(igKey => {
    // create array of keys repeating each time for the quantity required
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey+i} type={igKey} />
    }); 
  })
  // flatten array of arrays
  .reduce((acc, el) => {
    return acc.concat(el);
  }, []); 
  
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  console.log(transformedIngredients);

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;