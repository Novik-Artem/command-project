import React from "react";
import style from "./styles.module.scss";
import LazyLoad from "react-lazy-load";
import leftArrow from "../../../assets/icons/leftArrow.svg";
import rightArrow from "../../../assets/icons/rightArrow.svg";

function PaginationItems({ pages, currentPage, setPage }) {
  return (
    <div className={style.pages}>
      {pages.map((page) => {
        return (
          <button
            className={currentPage === page ? style.currentPage : style.page}
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        );
      })}
      <button>
        <LazyLoad>
          <img src={leftArrow} />
        </LazyLoad>
      </button>
      <button>
        <LazyLoad>
          <img src={rightArrow} />
        </LazyLoad>
      </button>
    </div>
  );
}

export default PaginationItems;
