import icons from 'url:../../img/icons.svg';
import View from './View.js';

class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _message = 'recipe does not found, Please try another one';
  _errorMessage = 'recipe does not found, Please try another one';

  _generateMarkup(result) {
    const markup = result
      .map(res => {
        return ` 
        <li class="preview">
            <a class="preview__link" href="#${res.id}">
              <figure class="preview__fig">
                <img src="${res.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${res.title}</h4>
                <p class="preview__publisher">${res.publisher}</p>
              </div>
            </a>
          </li>`;
      })
      .join('');
    return markup;
  }
}
export default new ResultView();
