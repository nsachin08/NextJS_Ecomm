
export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {

    case "init_stored":
      return action.value

    case "ADD_TO_BASKET":
      console.log(action);
      const itemIndex = state.basket.findIndex(
        (item) => item.id == action.item.id
      );
      console.log(itemIndex);
      if (itemIndex == -1) {
        action.item.quantity = 1;
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.basket, action.item])
        );
        state.basket = [...state.basket, action.item];
        console.log("done")
      } else {
        console.log("again");
        state.basket[itemIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify([...state.basket]));
      }
      return {
        ...state,
        basket: [...state.basket],
      };
    case "DELETE_FROM_BASKET":
      console.log("delete");
      console.log(action.item);
      state.basket = state.basket.filter((item) => item.id != action.item.id);
      localStorage.setItem("cart", JSON.stringify([...state.basket]));
      return {
        ...state,
        basket: [...state.basket],
      };

    case "ON_CHANGE_BASKET":
      console.log(action.item);
      if (action.item.quantity == 0) {
        state.basket = state.basket.filter((item) => item.id != action.item.id);
      } else {
        const cartindex = state.basket.findIndex(
          (item) => item.id == action.item.id
        );
        state.basket[cartindex].quantity = parseInt(action.item.quantity);
      }

      localStorage.setItem("cart", JSON.stringify([...state.basket]));
      return {
        ...state,
        basket: [...state.basket],
      };

    default:
      return state;
  }
};

