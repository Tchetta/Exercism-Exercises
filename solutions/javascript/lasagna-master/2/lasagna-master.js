/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
/**
 * cookingStatus function
 * @params {number}
 * @return {string}
 */

export function cookingStatus(remainingTime) {
  if(remainingTime === 0)
    return 'Lasagna is done.';
  if (!remainingTime)
    return 'You forgot to set the timer.';
  
  return 'Not done, please wait.';
}

export function preparationTime(layers, averageTime = 2) {
  return layers.length * averageTime;
}

export function quantities(layers) {
  const quantities = {noodles: 0, sauce: 0}
  for (let layer of layers) {
    if (layer === 'noodles')
      quantities[layer] += 50;
    else if (layer === 'sauce')
      quantities[layer] += 0.2;
  }
  return quantities;
}

export function addSecretIngredient(friendIngredients, myIngredients) {
  myIngredients.push(friendIngredients[friendIngredients.length - 1]);
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  for (let key in recipe) {
    scaledRecipe[key] = recipe[key] * portions / 2;
  }
  return scaledRecipe;
}
