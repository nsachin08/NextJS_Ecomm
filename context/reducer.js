

export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {

    case "init_stored":
      return action.value

    case "ADD_TO_BASKET":
      const itemIndex = state.basket.findIndex(
        (item) => item.id == action.item.id
      );
      if (itemIndex == -1) {
        action.item.quantity = 1;
        localStorage.setItem(
          "cart",
          JSON.stringify([...state.basket, action.item])
        );
        state.basket = [...state.basket, action.item];
      } else {
        state.basket[itemIndex].quantity += 1;
        localStorage.setItem("cart", JSON.stringify([...state.basket]));
      }
      return {
        ...state,
        basket: [...state.basket],
      };
    case "DELETE_FROM_BASKET":
      
      state.basket = state.basket.filter((item) => item.id != action.item.id);
      localStorage.setItem("cart", JSON.stringify([...state.basket]));
      return {
        ...state,
        basket: [...state.basket],
      };
  


    case "ON_CHANGE_BASKET":
      if(state.basket.length === 0)
      {
        return state;
      }
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

