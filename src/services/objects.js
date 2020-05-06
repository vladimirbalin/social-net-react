export const updateObjectInArray = (items, objPropName, itemId, newObjProps) => 
  items.map(u => {
    return u[objPropName] === itemId ? {...u, ...newObjProps} : u;
  })