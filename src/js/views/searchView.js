// This class only returns the query to be used!

class searchView {
  #parentEl = document.querySelector(".search");
  #data;

  getQuery() {
    const query = this.#parentEl.querySelector("input").value;
    this.#clearInput();
    return query;
  }

  #clearInput() {
    this.#parentEl.querySelector("input").value = "";
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
