import { async } from "regenerator-runtime";
import { RANDOM_ADVICE_URL } from "./config";
import { getJSON } from "./helpers";

export const state = {
  advice: {},
  search: {
    query: {},
    results: [],
  },
  bookmarks: [],
};

export const loadAdvice = async function () {
  const data = await getJSON(RANDOM_ADVICE_URL);
  state.advice = data.slip;
};

export const loadSearchResults = async function (query) {
  const data = await getJSON(`${RANDOM_ADVICE_URL}/search/${query}`);
  state.search.results = data.slips;
  // console.log(state.search.results);
};
