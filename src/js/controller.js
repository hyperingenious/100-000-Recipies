import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarkView.js';
import addRecipeView from './views/addRecipeView.js';
import View from './views/View.js';
// import servingsView from './views/servingsView.js';

// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

/**
 * Onload check for the device
 */
window.addEventListener('load', function () {
  const detectDeviceType = () => {
    const userAgent = navigator.userAgent;
    const mobileUserAgents = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /IEMobile/i,
      /Opera Mini/i,
    ];

    return mobileUserAgents.some(userAgentPattern =>
      userAgent.match(userAgentPattern)
    );
  };

  const isOpenedInPhone = detectDeviceType();
  if (isOpenedInPhone) {
    alert(
      'The App is not build for small screens, switch to DESKTOP MODE for better experience'
    );
  }
});

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    // LOADING....
    recipeView.renderSpinner();

    // 0. ud
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // 1. Fetching Data
    await model.loadRecipe(id);

    //Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (e) {
    console.error(e);
    recipeView.renderError();
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
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
    resultsView.render(model.getSearchResultsPage(1));
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlServings = function (newServings) {
  // Update the recipe servings in state
  model.updateServings(newServings);
  //Udate the view
  recipeView.update(model.state.recipe);
};

const controlBookmark = function () {
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  recipeView.update(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};
const controlAddRecipe = async function (recipe) {
  try {
    // render spinner
    addRecipeView.renderSpinner();

    await model.addRecipe(recipe);

    // render recipe
    recipeView.render(model.state.recipe);

    // Success Message
    addRecipeView.renderMessage();

    //Render bookmarks view
    bookmarksView.render(model.state.bookmarks);

    //Change url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Removing overlay
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerBookmark(controlBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addClickHandler(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
