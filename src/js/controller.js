import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
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

const controlSearchResults = async function () {
  try {
    // 1. Get Search query
    const query = searchView.getQuery();

    if (!query) return;

    // loading spinnner
    resultsView.renderSpinner();

    // 2. Load search results
    await model.loadSearchResults(query);

    // For rendering the results view
    resultsView.render(model.getSearchResultsPage(page));
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
