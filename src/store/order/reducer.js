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
    case "ADD_ITEM": {
      return [...state];
    }
    case "REMOVE_ITEM": {
      return [...state];
    }
    default:
      return state;
  }
}
