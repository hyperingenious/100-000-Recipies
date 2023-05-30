import * as model from './model.js';
import recipeView from './views/recipeView.js';

// const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // LOADING....
    recipeView.showSpinner();

    // 1. Fetching Data
    await model.loadRecipe(id);

    //Rendering Recipe
    recipeView.render(model.state.recipe);

    // Displaying Data
  } catch (e) {
    console.error(e);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

// if (module.hot) {
//   module.hot.accept();
// }
