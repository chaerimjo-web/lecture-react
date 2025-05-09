const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView }) {
    console.log(tag);

    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;

    this.subscribeViewEvents();
  }
  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", () => this.reset());
  }
  search(searchKeword) {
    // console.log(tag, keyword);
    this.store.search(searchKeword);
    this.render();
  }
  reset() {
    console.log(tag, "reset");
    this.store.searchKeword = "";
    this.store.searchResult = [];
    this.render();
  }
  render() {
    if (this.store.searchKeword.length > 0) {
      this.searchResultView.show(this.store.searchResult);
      return;
    }
    this.searchResultView.hide();
  }
}
