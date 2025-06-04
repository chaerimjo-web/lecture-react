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
    const { keywordList } = this.state;
    const { onClick } = this.props;
    
    return <List data={keywordList} onClick={onClick} hasIndex />;
  }
}
