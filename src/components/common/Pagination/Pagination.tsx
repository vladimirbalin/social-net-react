import React, { useState } from "react";
import "./Pagination.scss";
import { totalPagesCount } from "../../../services/utils";
import { NavLink } from "react-router-dom";
import classNames from 'classnames';
import { SetPortionNumberType } from "../../../redux/users-reducer";

type PaginationPropsType = {
  totalUsersCount: number
  itemsCountPerPage: number
  currentPage: number
  url: string
  portionSize: number
  portionNumber: number
  setPortionNumber: (portionNumber: number) => SetPortionNumberType
}
type PaginationItemPropsType = {
  pageNumber: number
  currentPage: number
  url: string
}
export const PaginationItem: React.FC<PaginationItemPropsType> = ({pageNumber, currentPage, url}) => {
  const liClasses = classNames({
    'users__btn-paginator': true,
    'users__selected': pageNumber === currentPage
  })
  return (
    <li className={liClasses}>
      <NavLink to={`${url}?page=${pageNumber}`} className='users__links'>
        {pageNumber}
      </NavLink>
    </li>)
}

export const Pagination: React.FC<PaginationPropsType> =
  ({totalUsersCount, itemsCountPerPage, currentPage, url, portionSize, portionNumber, setPortionNumber}) => {
    const {totalPages, pages} = totalPagesCount(totalUsersCount, itemsCountPerPage);
    const portionCount = Math.ceil(totalPages / portionSize);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const firstPortionClickHandler = () => setPortionNumber(1)
    const prevPortionClickHandler = () => setPortionNumber(portionNumber - 1)
    const nextPortionClickHandler = () => setPortionNumber(portionNumber + 1)
    const lastPortionClickHandler = () => setPortionNumber(portionCount);
    return (
      <ul className='users__pages'>
        <button onClick={firstPortionClickHandler} disabled={portionNumber === 1}>FIRST</button>
        <button onClick={prevPortionClickHandler} disabled={portionNumber === 1}>PREV {portionSize}</button>
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(page =>
            <PaginationItem key={page} currentPage={currentPage} url={url} pageNumber={page}/>
          )}

        <button onClick={nextPortionClickHandler}
                disabled={portionCount <= portionNumber}>NEXT {portionSize}</button>
        <button onClick={lastPortionClickHandler} disabled={portionNumber === portionCount}>LAST</button>
      </ul>
    )
  };