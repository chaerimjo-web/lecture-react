import store from "../Store.js";
import List from "./List.js";
import React from "react";

export default class KeywordList extends React.Component {
  constructor() {
    super();

    this.state = {
      keywordList: [],
    };
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    this.setState({
      keywordList,
    });
  }

  render() {
    return(
      <List
        data={this.state.keywordList}
        onClick={this.props.onClick}
        renderItem={(item, index) => {
          return (
            <>
              <span className="number">{index + 1}</span>
              <span className="keyword">{item.keyword}</span>
            </>
          );
        }}
      />
    )
  }
}
