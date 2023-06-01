import icons from 'url:../../img/icons.svg';
import View from './View.js';
import { PAGE_CAPACITY } from '../config';

class PaginationView extends View {
  _nextPage;
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(this._data.results.length / PAGE_CAPACITY);

    // Page 1 there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--next">
          <span>
            Page ${curPage + 1}
          </span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
    </button>
      `;
    }

    // last Page
    if (curPage === numPages && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--next">
          <span>
            Page ${curPage - 1}
          </span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
    </button>
      `;
    }

    // Other page
    if (curPage < numPages) {
      return `
        <button class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
    </button>
    <button class="btn--inline pagination__btn--next">
          <span>
            Page ${curPage + 1}
          </span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
    </button>
      `;
    }

    //Page 1 and there are no other pages
    return '';

    /*
    <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page 1</span>
    </button>
    <button class="btn--inline pagination__btn--next">
          <span>
            Page ${numPages - (numPages - 2)}
          </span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
    </button>
 */
  }
}
export default new PaginationView();
