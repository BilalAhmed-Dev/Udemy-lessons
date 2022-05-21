import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import SearchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import PaginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';



///////////////////////////////////////
if (module.hot) {
  module.hot.accept();
}
const displayRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.loadingSpinner();
    
    resultsView.update(model.getSearchResultsPage());
    
    bookmarksView.update(model.state.bookmarks);
    // 1 loading recipe
    await model.loadRecipe(id);
    
    // 2 rendering recipe
    recipeView.render(model.state.recipe);


  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearch = async function () {
  try {
    ///1
    const query = SearchView.getQuery();
    if (!query)
      return resultsView.renderError('Please insert something in input field');
    ///2
    resultsView.loadingSpinner();
    await model.loadSearchResults(query);
    resultsView.render(model.getSearchResultsPage());
    PaginationView.render(model.state.recipes);
  } catch (err) {
    throw err;
  }
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  PaginationView.render(model.state.recipes);
};

const controlServings = function (newServings) {
  model.updateServings(newServings);
  recipeView.update(model.state.recipe);
};

const controlAddBookMark = function(){
  // add or remove book mark
  if(!model.state.recipe.bookmarked)  model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

    // update view
  recipeView.update(model.state.recipe);

  // display bookmarks
  
  bookmarksView.render(model.state.bookmarks)
  
}

const controlBookmarks = function() {
  bookmarksView.render(model.state.bookmarks)
};

controlAddRecipe = async function(newRecipe){
  try {
   addRecipeView.loadingSpinner();

  await model.uploadRecipe(newRecipe);
 

  recipeView.render(model.state.recipe);

  addRecipeView.renderMessage();

  bookmarksView.render(model.state.bookmarks);

  window.history.pushState(null, '', `#${model.state.recipe.id}`);

  setTimeout(function () {
    addRecipeView.toggleWindow();
  }, MODAL_CLOSE_SEC * 1000);

  } catch(err){
    
    addRecipeView.renderError(err.message);
  }
}


const init = function () {
  bookmarksView.addHanlderRender(controlBookmarks);
  recipeView.addHandlerRender(displayRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHanlderAddBookMark(controlAddBookMark);
  SearchView.addHandlerSearch(controlSearch);
  PaginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe)
};

init();
