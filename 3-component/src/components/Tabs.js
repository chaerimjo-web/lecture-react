import React from "react";

export const TabType = {
  KEYWORD: "KEYWORD",
  HISTORY: "HISTORY",
};

const TabLable = {
  [TabType.KEYWORD]: "추천 검색어",
  [TabType.HISTORY]: "최근 검색어",
};

const Tabs = ({ selectedTab, onChange }) => {
  return (
    <>
      <ul className="tabs">
        {Object.values(TabType).map((tapType) => {
          return (
            <li
              className={selectedTab === tapType ? "active" : ""}
              onClick={() => {
                onChange(tapType);
              }}
              key={tapType}
            >
              {TabLable[tapType]}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Tabs;
