import { async } from "regenerator-runtime";
import * as model from "../js/model.js";
import adviceView from "../js/views/adviceView.js";
import searchView from "./views/searchView.js";

import "core-js/stable";
import "regenerator-runtime/runtime.js";

const copyBtn = document.querySelector(".copy--btn");
const keyword = document.querySelector(".search-keyword").querySelector("span");

const controlAdvice = async function () {
  try {
    // 1) Load spinner
    adviceView.renderSpinner();

    // 2)Load advice

    // If there is ID
    // console.log(window.location.hash);

    await model.loadAdvice();
    // 3) Render advice
    adviceView.renderAdvice(model.state.advice);
  } catch (err) {
    console.error(err);
  }
};

const controlSearchResults = async function () {
  // 1) Get query
  const query = searchView.getQuery();
  keyword.textContent = query;
  console.log(query);

  // 2) Load searchResults
  await model.loadSearchResults(query);

  console.log(model.state.search.results);
};

const init = function () {
  adviceView.addHandlerRender(controlAdvice);
  searchView.addHandlerSearch(controlSearchResults);
};

init();

// generateBtn.addEventListener("click", controlAdvice);
