import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and book mark it ;)';
  _message = '';

  addHanlderRender(handler){
    window.addEventListener('load', handler());
  }

  _generateHtml() {
    return this._data.map(bookMark => previewView.render(bookMark, false)).join('');
  }
}
export default new BookmarksView();
