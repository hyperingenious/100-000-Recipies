import { awrap } from 'regenerator-runtime';
import { API_URL, PAGE_CAPACITY, KEY } from './config.js';
import { getJSON, sendJSON } from './helpers.js';

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

    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
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

const persistBookmark = function () {
  localStorage.setItem('bookmark', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  //Add Bookmark
  state.bookmarks.push(recipe);
  // Mark current recipe as bookmark, by setting true
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmark();
};

export const deleteBookmark = function (id) {
  // Finding index
  const index = state.bookmarks.findIndex(bookmark => bookmark.id === id);
  // Removing bookmark
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmark();
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

export const addRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3) {
          throw new Error(
            'Wrong ingredients Format, try the right one with CSV'
          );
        }
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      publisher: newRecipe.publisher,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      servings: newRecipe.servings,
      cooking_time: newRecipe.cookingTime,
      ingredients,
    };

    const data = await sendJSON(`${API_URL}?key=${KEY}`, recipe);

    console.log(data);
  } catch (err) {
    throw err;
  }
};

const init = function () {
  const storage = JSON.parse(localStorage.getItem('bookmark'));
  if (storage) {
    state.bookmarks = storage;
  }
};
init();
