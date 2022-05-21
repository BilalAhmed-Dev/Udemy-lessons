import { async } from 'regenerator-runtime';
import { API_URL, KEY } from './config.js';
import { AJAX } from './helpers.js';
import { RES_PER_PAGE } from './config.js';
export const state = {
  recipe: {},
  recipes: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

const createRecipeObject = function(data) {
  const {recipe} = data.data
  console.log(recipe);
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    servings: recipe.servings,
    ...(recipe.key && {key: recipe.key}),
  };
}

export const loadRecipe = async function (id) {
  try {
    const resData = await AJAX(`${API_URL}/${id}?key=${KEY}`);
  
    state.recipe = createRecipeObject(resData);
    

   
 
    if(state.bookmarks.some(bookmark => bookmark.id === id))
    state.recipe.bookmarked = true;
    else  state.recipe.bookmarked = false;
  } catch (err) {
    throw err;
  }
};
export const loadSearchResults = async function (query) {
  state.recipes.page = 1;
  try {
    state.recipes.query = query;
    const res = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    let { recipes } = res.data;
    state.recipes.results = recipes.map(el => {
      return {
        id: el.id,
        title: el.title,
        image: el.image_url,
        publisher: el.publisher,
    ...(el.key && {key: el.key}),
      };
    });
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.recipes.page) {
  state.recipes.page = page;
 
  const start = (page - 1) * state.recipes.resultsPerPage; //0
  const end = page * state.recipes.resultsPerPage; //9
  return state.recipes.results.slice(start, end);
};

export const updateServings = function (servings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * servings) / state.recipe.servings;
  });
  
  state.recipe.servings = servings;

};

const presistBookmarks = function() {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks))
}

export const addBookmark = function(recipe) {
  // Add bookmark
state.bookmarks.push(recipe);

// Mark current recipe as bookmark
if(recipe.id === state.recipe.id) state.recipe.bookmarked = true
presistBookmarks();
}

export const deleteBookmark = function(id) {
  const index = state.bookmarks.findIndex(el => el.id === id)
  state.bookmarks.splice(index, 1);
  
  if(id === state.recipe.id) state.recipe.bookmarked = false;
presistBookmarks();

};

const init = function() {
const storage = localStorage.getItem('bookmarks');
if(storage) state.bookmarks = JSON.parse(storage)
}
init();




export const uploadRecipe = async function(newRecipe) {
  try {
  const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '').map(ing => {
    const ingArr = ing[1].split(',').map(el => el.trim());
    if(ingArr.length !== 3) throw new Error('Wrong ingredient format! please the correct format');
    const [quantity, unit, description] = ingArr
    return {quantity: quantity? +quantity: null, unit, description}
  });
  const recipe = {
    title: newRecipe.title,
    source_url: newRecipe.sourceUrl,
    image_url: newRecipe.image,
    publisher: newRecipe.publisher,
    cooking_time: +newRecipe.cookingTime,
    servings: +newRecipe.servings,
    ingredients,
  }
  
  const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
  state.recipe = createRecipeObject(data);
  addBookmark(state.recipe)
} catch(err){
  throw err;
 }


};