import { TabType } from "./views/TabView.js";

const tag = "[Controller]";

export default class Controller {
  constructor(
    store,
    { searchFormView, searchResultView, tabView, keywordListView }
  ) {
    console.log(tag);

    this.store = store;
    this.searchFormView = searchFormView;
    this.searchResultView = searchResultView;
    this.tabView = tabView;
    this.keywordListView = keywordListView;

    this.subscribeViewEvents();
    this.render();
  }

  subscribeViewEvents() {
    this.searchFormView
      .on("@submit", (event) => this.search(event.detail.value))
      .on("@reset", () => this.reset());

    this.tabView.on("@change", (event) => this.changeTab(event.detail.value));

    this.keywordListView.on("@click", (event) =>
      this.search(event.detail.value)
    );
  }

  changeTab(tab) {
    console.log(tab);
    this.store.selectedTab = tab;
    this.render();
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
      return this.renderSearchResult();
    }

    this.tabView.show(this.store.selectedTab);

    if (this.store.selectedTab === TabType.KEYWORD) {
      this.keywordListView.show(this.store.getKeywordList());
    } else if (this.store.selectedTab === TabType.HISTORY) {
      this.keywordListView.hide();
    } else {
      throw "사용할 수 없는 탭입니다.";
    }

    this.searchResultView.hide();
  }

  renderSearchResult() {
    this.tabView.hide();
    this.keywordListView.hide();

    this.searchResultView.show(this.store.searchResult);
    this.searchFormView.show(this.store.searchKeword);
  }
}
