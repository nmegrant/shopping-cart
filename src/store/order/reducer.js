const initialState = [
  {
    id: 1,
    name: "Burt's Bees Favial Cleansing Towelettes",
    price: 7.0,
    quantity: 1,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQf_srhYXbF6ImGgTK-dKA1_MAlIEZKc9O02Q&usqp=CAU",
  },
  {
    id: 2,
    name: "Valjean Labs Facial Mist",
    price: 12.0,
    quantity: 1,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRl9VVIaBBs6OeBhw-UdRPmUmActt3mXQqmtw&usqp=CAU",
  },
];

export default function orderReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREASE_ITEM_QUANTITY": {
      const newState = [...state].map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return { ...item };
        }
      });
      return [...newState];
    }
    case "DECREASE_ITEM_QUANTITY": {
      const newState = [...state].map((item) => {
        if (item.id === action.payload && item.quantity !== 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return { ...item };
        }
      });
      return [...newState];
    }
    case "REMOVE_ITEM": {
      const newState = [...state].filter((item) => item.id !== action.payload);
      return [...newState];
    }
    default:
      return state;
  }
}
