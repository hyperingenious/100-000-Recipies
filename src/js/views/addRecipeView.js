import icons from 'url:../../img/icons.svg';
import View from './View.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload'); // FORM elemnt from html
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
}
export default new AddRecipeView();
