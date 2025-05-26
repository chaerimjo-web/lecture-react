import store from "./js/store.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
      searchResult: [],
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.search(this.state.searchKeyword);
    this.setState({ searchKeyword: "" });
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({ searchResult });
  }

  handleReset() {
    this.setState({ searchKeyword: "" });
    console.log("TODO: handleResset");
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    if (searchKeyword.length === 0) return this.handleReset();
    this.setState({ searchKeyword });
  }

  render() {
    // let resetButton = null; //엘리먼트 변수를 사용하는 방식
    // if (this.state.searchKeyword.length > 0) {
    //   resetButton = <button className="btn-reset" type="reset"></button>;
    // }

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          <form
            id="search-form-view"
            onSubmit={(event) => this.handleSubmit(event)}
            onReset={() => this.handleReset()}
          >
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              autoFocus
              value={this.state.searchKeyword}
              onChange={(event) => this.handleChangeInput(event)}
            />
            {this.state.searchKeyword.length > 0 && (
              <button className="btn-reset" type="reset"></button>
            )}
          </form>
          <div className="content">
            {this.state.searchResult.length > 0 ? (
              <ul className="result">
                {this.state.searchResult.map((item) => {
                  return (
                    <li>
                      <img src={item.imageUrl} alt={item.name} />
                      <p>{item.name}</p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="empty-box">검색 결과가 없습니다.</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));

// element를 가상돔으로 만든다. 만든 위치는 app
