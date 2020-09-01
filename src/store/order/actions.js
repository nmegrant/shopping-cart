export function increaseOrderedItem(id) {
  return {
    type: "INCREASE_ITEM_QUANTITY",
    payload: id,
  };
}

export function decreaseOrderedItem(id) {
  return {
    type: "DECREASE_ITEM_QUANTITY",
    payload: id,
  };
}

export function removeOrderedItem(id) {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
}
