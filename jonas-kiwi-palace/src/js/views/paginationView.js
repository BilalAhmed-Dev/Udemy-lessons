import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
     
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      
      handler(goToPage);
    });
  }

  _generateHtml() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;

    // Page 1, and there are other pages
    if (currentPage === 1 && numPages > 1)
      return this._generateMarkupButton('next');

    // Last page
    if (currentPage === numPages && numPages > 1)
      return this._generateMarkupButton('prev');

    // Other page
    if (currentPage < numPages)
      return `${this._generateMarkupButton(
        'next',
        currentPage
      )}${this._generateMarkupButton('prev')}`;

    // Page 1, no other pages
    return '';
  }

  _generateMarkupButton(type) {
    const curr = this._data.page;
    return `
      <button data-goto="${
        type === 'next' ? curr + 1 : curr - 1
      }" class="btn--inline pagination__btn--${type}">
        ${type === 'next' ? `<span>Page ${curr + 1}</span>` : ''}
        <svg class="search__icon">
           <use href="${icons}#icon-arrow-${
      type === 'next' ? 'right' : 'left'
    }"></use>
        </svg>
        ${type === 'prev' ? `<span>Page ${curr - 1}</span>` : ''}
      </button>
    `;
  }
}

export default new PaginationView();
