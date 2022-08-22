import React from "react";
import style from "./styles.module.scss";
import LazyLoad from "react-lazy-load";
import leftArrow from "../../../assets/icons/leftArrow.svg";
import rightArrow from "../../../assets/icons/rightArrow.svg";

function PaginationItems({ pages, currentPage, setPage, nextPage, prevPage }) {
  return (
    <div className={style.pages}>
      {pages.map((page) => {
        return (
          <button
            key={page}
            className={currentPage === page ? style.currentPage : style.page}
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button onClick={() => prevPage()}>
        <LazyLoad>
          <img src={leftArrow} />
        </LazyLoad>
      </button>
      <button onClick={() => nextPage()}>
        <LazyLoad>
          <img src={rightArrow} />
        </LazyLoad>
      </button>
    </div>
  );
}

export default PaginationItems;
