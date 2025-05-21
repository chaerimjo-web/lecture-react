class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
    };
  }

  handleChangeInput(event) {
    // this.state.searchKeyword = event.target.value;
    // this.forceUpdate();
    this.setState({
      searchKeyword: event.target.value,
    });
  }

  render() {
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
            <button className="btn-reset" type="reset"></button>
          </form>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));

// element를 가상돔으로 만든다. 만든 위치는 app
