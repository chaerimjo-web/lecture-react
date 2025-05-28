import React from "react";

const SearchForm = ({ onSubmit, onChange, onReset, value }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const handleChangeInput = (event) => {
    onChange(event.target.value);
  };

  const handleReset = () => {
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        autoFocus
        value={value}
        onChange={handleChangeInput}
      />
      {value.length > 0 && <button className="btn-reset" type="reset"></button>}
    </form>
  );
};

export default SearchForm;
