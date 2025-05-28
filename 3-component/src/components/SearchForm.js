import React from "react";

export default class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.searchKeyword); //프롭스의 콜백함수를 호출한다.
  }

  handleChangeInput(event) {
    const searchKeyword = event.target.value;

    if (searchKeyword.length <= 0) {
      this.handleReset();
    }

    this.setState({ searchKeyword });
  }

  handleReset() {
    this.props.onReset();
  }

  render() {
    const searchKeyword = this.state;

    return (
      <form
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
  }
}
