import { API_URL, PAGE_CAPACITY } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    console.error(`${err}, hamara Error 💣`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.results = data.data.recipes.map(res => {
      return {
        id: res.id,
        title: res.title,
        publisher: res.publisher,
        image: res.image_url,
      };
    });
    console.log(state.search.results);
  } catch (err) {
    console.error(err);
  }
};

export const getSearchResultsPage = function (page) {
  state.search.page = page;
  const start = (page - 1) * PAGE_CAPACITY;
  const end = page * PAGE_CAPACITY;

  return state.search.results.slice(start, end);
};

export const addBookmark = function (recipe) {
  //Add Bookmark
  state.bookmarks.push(recipe);
  // Mark current recipe as bookmark, by setting true
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
};
export const removeBookmark = function (recipe) {
  // Remove Bookmark
  state.bookmarks.splice(
    state.bookmarks.findIndex(arr => arr.id === recipe.id),
    1
  );

  // unbookmark the bookmarked recipe
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = false;
};

export const updateServings = function (newServings) {
  console.log(state.recipe);
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
  console.log('hello');
  console.log(state.recipe);
};
