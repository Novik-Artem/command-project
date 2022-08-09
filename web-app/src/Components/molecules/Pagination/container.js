import React, { useEffect } from "react";
import {
  updatePage,
  getTotalCardsAmount,
} from "../../../redux/actions/card-info";
import { cardinfo } from "../../../redux/reducers/card-info";
import { useSelector, useDispatch } from "react-redux";
import PaginationItems from "./component";

const Pagination = () => {
  const currentPage = useSelector((state) => state.cardinfo.currentPage);
  const pages = useSelector((state) => state.cardinfo.pages);
  const totalCardAmount = useSelector(
    (state) => state.cardinfo.totalCardAmount
  );
  const dispatch = useDispatch();
  const setPage = (page) => {
    dispatch(updatePage(page));
  };
  const nextPage = () => {
    if (totalCardAmount !== currentPage) {
      dispatch(nextPage());
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      dispatch(prevPage());
    }
  };
  useEffect(() => {
    dispatch(getTotalCardsAmount());
    dispatch(cardinfo.actions.setPagesCount());
  }, []);

  return (
    <PaginationItems
      pages={pages}
      currentPage={currentPage}
      setPage={setPage}
      nextPage={nextPage}
      prevPage={prevPage}
    />
  );
};

export const container = Pagination;
