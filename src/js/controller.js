import { async } from "regenerator-runtime";
import * as model from "../js/model.js";
import adviceView from "../js/views/adviceView.js";

import "core-js/stable";
import "regenerator-runtime/runtime.js";

const controlAdvice = async function () {
  try {
    // 1) Load spinner
    adviceView.renderSpinner();

    // 2)Load advice

    await model.loadAdvice();
    // 3) Render advice
    adviceView.renderAdvice(model.state.advice);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  adviceView.addHandlerRender(controlAdvice);
};

init();

// generateBtn.addEventListener("click", controlAdvice);
