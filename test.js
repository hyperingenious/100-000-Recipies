// Page 1 and other pages
if (curPage < numPages && curPage === 1) {
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
// Last page
if (curPage === numPages && numPages > 1) {
  return `
        <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
    </button>
      `;
}
if (curPage > 1 && numPages > curPage) {
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
return '';
