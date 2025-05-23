import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";

export default class SearchFormView extends View {
  constructor() {
    console.log(tag);
    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element); //this.element -> View

    this.showResetButton(false);
    this.bindEvent();
  }
  showResetButton(visible = true) {
    //기본값 true
    this.resetElement.style.display = visible ? "block" : "none";
  }
  bindEvent() {
    on(this.inputElement, "keyup", () => this.handleKeyup());
    //.bind(this) => 클래스 메서드는 this가 엉뚱하게 바인딩될 수 있기 때문에, 안전하게 현재 인스턴스를 바인딩한다. handleKeyup() 안에서의 this가 항상 SearchFormView 인스턴스를 가리키도록 보장 this=searchformview
    on(this.element, "submit", (event) => this.handleSubmit(event));
    on(this.resetElement, "click", () => this.handleReset());
  }

  handleKeyup() {
    const { value } = this.inputElement;
    this.showResetButton(value.length > 0);
    if (value.length <= 0) {
      this.handleReset();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(tag, "handleSubmit");

    const { value } = this.inputElement;
    this.emit("@submit", { value }); //"@submit" 커스텀 이벤트 생성
  }

  handleReset() {
    console.log(tag, "handleReset");
    this.emit("@reset");
  }

  show(value = "") {
    this.inputElement.value = value;
    this.showResetButton(this.inputElement.value.length > 0);

    super.show();
  }
}
