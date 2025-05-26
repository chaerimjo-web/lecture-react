import store from "./js/store.js";

const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLable = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.search(this.state.searchKeyword);
    this.setState({ submitted: true });
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({ searchResult });
  }

  handleReset() {
    this.setState({ searchKeyword: "", submitted: false });
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;
    if (searchKeyword.length <= 0) return this.handleReset();
    this.setState({ searchKeyword });
  }

  handleClick() {}

  render() {
    const searchForm = (
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
    );

    const searchResult =
      this.state.searchResult.length > 0 ? (
        <ul className="result">
          {this.state.searchResult.map((item) => {
            return (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="empty-box">검색 결과가 없습니다.</div>
      );

    const tabs = (
      <>
        <ul className="tabs">
          {Object.values(TabType).map((tapType) => {
            return (
              <li
                className={this.state.selectedTab === tapType ? "active" : ""}
                onClick={() => this.setState({ selectedTab: tapType })}
                key={tapType}
              >
                {TabLable[tapType]}
              </li>
            );
          })}
        </ul>
        {this.state.selectedTab === TabType.KEYWORD && <>추천 검색어</>}
        {this.state.selectedTab === TabType.HISTORY && <>최근 검색어</>}
      </>
    );

    return (
      <>
        <header>
          <h2 className="container">검색</h2>
        </header>
        <div className="container">
          {searchForm}
          <div className="content">
            {this.state.submitted ? searchResult : tabs}
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));

// element를 가상돔으로 만든다. 만든 위치는 app
