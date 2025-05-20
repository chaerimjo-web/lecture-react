const element = (
  <>
    <header>
      <h2 className="container">검색</h2>
    </header>
    <div className="container">
      <form id="search-form-view">
        <input type="text" placeholder="검색어를 입력하세요" autoFocus />
        <button className="btn-reset" type="reset"></button>
      </form>
    </div>
  </>
);
ReactDOM.render(element, document.querySelector("#app"));

// element를 가상돔으로 만든다. 만든 위치는 app
