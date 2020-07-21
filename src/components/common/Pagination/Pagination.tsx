import React from 'react';
import './Pagination.scss';
import { totalPagesCount } from '../../../services/utils';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { SetPortionNumberType } from '../../../redux/users-reducer';
import Button from '../Button/Button';

type PaginationPropsType = {
  totalUsersCount: number;
  itemsCountPerPage: number;
  currentPage: number;
  url: string;
  portionSize: number;
  portionNumber: number;
  setPortionNumber: (portionNumber: number) => SetPortionNumberType;
};
type PaginationItemPropsType = {
  pageNumber: number;
  currentPage: number;
  url: string;
};
export const PaginationItem: React.FC<PaginationItemPropsType> = ({
  pageNumber,
  currentPage,
  url,
}) => {
  const liClasses = classNames({
    'users__btn-paginator': true,
    users__selected: pageNumber === currentPage,
  });
  return (
    <li className={liClasses}>
      <Link to={`${url}?page=${pageNumber}`} className="users__links">
        {pageNumber}
      </Link>
    </li>
  );
};

export const Pagination: React.FC<PaginationPropsType> = ({
  totalUsersCount,
  itemsCountPerPage,
  currentPage,
  url,
  portionSize,
  portionNumber,
  setPortionNumber,
}) => {
  const { totalPages, pages } = totalPagesCount(
    totalUsersCount,
    itemsCountPerPage
  );
  const portionCount = Math.ceil(totalPages / portionSize);

  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  const firstPortionClickHandler = () => setPortionNumber(1);
  const prevPortionClickHandler = () => setPortionNumber(portionNumber - 1);
  const nextPortionClickHandler = () => setPortionNumber(portionNumber + 1);
  const lastPortionClickHandler = () => setPortionNumber(portionCount);
  return (
    <ul className="users__pages">
      <Button
        onClick={firstPortionClickHandler}
        disabled={portionNumber === 1}
        small
      >
        FIRST
      </Button>
      <Button
        onClick={prevPortionClickHandler}
        disabled={portionNumber === 1}
        small
      >
        PREV {portionSize}
      </Button>
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((page) => (
          <PaginationItem
            key={page}
            currentPage={currentPage}
            url={url}
            pageNumber={page}
          />
        ))}
      <Button
        onClick={nextPortionClickHandler}
        disabled={portionCount <= portionNumber}
        small
      >
        NEXT {portionSize}
      </Button>
      <Button
        onClick={lastPortionClickHandler}
        disabled={portionNumber === portionCount}
        small
      >
        LAST
      </Button>
    </ul>
  );
};
