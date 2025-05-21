class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
    };
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    // this.forceUpdate();
    this.setState({
      searchKeyword,
    });
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
          <form id="search-form-view">
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
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));

// element를 가상돔으로 만든다. 만든 위치는 app
