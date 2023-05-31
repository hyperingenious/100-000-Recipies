import * as model from './model.js';
import recipeView from './views/recipeView.js';

// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const init = function () {
  const controlRecipes = async function () {
    try {
      const id = window.location.hash.slice(1);

      if (!id) return;

      // LOADING....
      recipeView.renderSpinner();

      // 1. Fetching Data
      await model.loadRecipe(id);

      //Rendering Recipe
      recipeView.render(model.state.recipe);

      // Displaying Data
    } catch (e) {
      // alert(e);
      recipeView.renderError();
    }
  };
  recipeView.addHandlerRender(controlRecipes);
};
init();

if (module.hot) {
  module.hot.accept();
}

model.loadSearchResults('pizza');
