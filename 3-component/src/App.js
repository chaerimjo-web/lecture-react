import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js"

export default class App extends React.Component {
	search(searchKeyword) {
		console.log(searchKeyword);
	}

	handleReset() {
		console.log('reset');
	}

  render() {
    return (
      <>
        <Header title="검색" />
        <div className="container">
					<SearchForm 
						onSubmit={(searchKeyword) => this.search(searchKeyword)} 
						onReset={() => this.handleReset()}
					/>
				</div>
      </>
    );
  }
}
