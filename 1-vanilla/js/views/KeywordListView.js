import View from "./View.js";
import { qs, delegate } from "../helpers.js";

export default class KeywordListView extends View {
  constructor() {
    super(qs("#keyword-list-view"));

    this.template = new Template();
    this.bindEvents();
  }

  bindEvents() {
    delegate(this.element, "click", "li", (event) => this.handClick(event));
  }

  handClick(event){
    console.log('test', event.target.dataset.keyword);

    const value = event.target.dataset.keyword;
    this.emit("@click", { value })
  }

  show(data = []) {
    this.element.innerHTML =
      data.length > 0
        ? this.template.getList(data)
        : this.template.getEmptyMessage();
    super.show();
  }
}

class Template {
  getEmptyMessage() {
    return `
			<div class="empty-box">추천 검색어가 없습니다.</div>
		`;
  }

  getList(data = []) {
    return `
			<ul class="list"> 
				${data.map(this._getItem).join("")}
			</ul>
		`;
  }

  _getItem({ id, keyword }) {
    return `
			<li data-keyword=${keyword}>
				<span class="number">${id}<span>
				<span class="keyword">${keyword}<span>
			</li>
		`;
  }
}
