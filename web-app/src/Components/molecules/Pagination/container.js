import React, { useEffect } from "react";
import { updatePage, getTotalCardsAmount } from "../../../redux/actions/card-info";
import { useSelector, useDispatch } from "react-redux";
import PaginationItems from "./component";

const Pagination = () => {
  const currentPage = useSelector((state) => state.cardinfo.currentPage);
  const limit = useSelector((state) => state.cardinfo.limit);
  const dispatch = useDispatch();
  const setPage = (page) => {
    dispatch(updatePage(page));
  };
  useEffect(()=>{
    dispatch(getTotalCardsAmount(),[])
  })
  const totalCardAmount = useSelector((state) => state.cardinfo.totalCardAmount);
  let pages = useSelector((state) => state.cardinfo.pages);
  let pagesCount = Math.ceil(totalCardAmount / limit);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return <PaginationItems pages={pages} currentPage={currentPage} setPage={setPage} />;
};

export const container = Pagination;
