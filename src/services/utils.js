import { parse } from 'querystring';

export const updateObjectInArray = (items, objPropName, itemId, newObjProps) =>
  items.map((u) => {
    return u[objPropName] === itemId ? { ...u, ...newObjProps } : u;
  });

export const totalPagesCount = (totalUsersCount, itemsCountPerPage) => {
  const pages = [];
  const totalPages = Math.ceil(totalUsersCount / itemsCountPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return { totalPages, pages };
};

export const getPageNumber = (search) => {
  return search ? Number(parse(search)['?page']) : 1;
};
export const getPortionNumber = (currentPage) => {
  return Math.ceil(currentPage / 10);
};
