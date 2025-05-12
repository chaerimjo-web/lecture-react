import TabView from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
  constructor(store, { searchFormView, searchResultView, tabView }) {
    console.log(tag);

    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;

    this.subscribeViewEvents();
    this.render();
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
      this.tabView.hide();
      this.searchResultView.show(this.store.searchResult);
      return;
    }
    this.tabView.show(); //처음 서치키워드 값이 없기 때문에 tabview가 보이고 searchResultView가 숨겨진다.
    this.searchResultView.hide();
  }
}
