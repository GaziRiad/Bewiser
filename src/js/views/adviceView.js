class adviceView {
  #parentEl = document.querySelector(".quote-container");
  #generateBtn = document.querySelector(".generate-btn");
  #data;

  renderAdvice(data) {
    this.#data = data;
    this.#clearParent();
    this.#parentEl.insertAdjacentHTML("afterbegin", this.#generateMarkup());
  }

  #clearParent() {
    this.#parentEl.innerHTML = "";
  }

  #generateMarkup() {
    return `
      <figure class="advice-fig">
        <p class="advice-id">#${this.#data.id}</p>
        <blockquote class="advice-quote">
        ${this.#data.advice}
        </blockquote>
      </figure>
      <div class="fig-icons">
        <button class="save--btn">
          <span class="material-symbols-outlined">
            bookmark
          </span>
          <!-- <span>Bookmarked !</span> -->
        </button>
        <button class="copy--btn">
          <span class="material-symbols-outlined">
            content_copy
          </span>
        </button>
      </div>
  `;
  }

  renderSpinner() {
    const markup = `
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;
    this.#clearParent();
    this.#parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerRender(handler) {
    this.#generateBtn.addEventListener("click", handler);
  }
}

export default new adviceView();
