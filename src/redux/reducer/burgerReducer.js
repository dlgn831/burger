const initialState = {
    ingredients: {
        salad: 0,
        cheese: 0,
        bacon: 0,
        meat: 0
    },
    totalPrice: 0,
    purchasing: false,
    ingredientNames: {
        bacon: "Гахайн мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
        salad: "Салад"
    }
};

const INGREDIENT_PRICES = { salad: 300, cheese: 450, bacon: 1500, meat: 2500 };

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_INGREDIENT') {
        return{
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ortsNer]: state.ingredients[action.ortsNer] + 1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ortsNer],
            purchasing: true
        }
    }
    else if(action.type === 'REMOVE_INGREDIENT') {
        const newPrice = state.totalPrice - INGREDIENT_PRICES[action.ortsNer];
        return{
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ortsNer]: state.ingredients[action.ortsNer] - 1
            },
            totalPrice: newPrice,
            purchasing: newPrice > 0 ? true : false
        }
    }
    return state;
};

export default reducer;