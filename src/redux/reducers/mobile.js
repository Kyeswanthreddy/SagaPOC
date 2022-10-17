const initialState = {
    noOfMobile: 10
}

export const mobileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_MOBILE_SUCCESS':
            return {...state, noOfMobile: state.noOfMobile - 1};
        case 'SELL_MOBILE':
            return {...state, noOfMobile: state.noOfMobile + 1};
        default:
            return state;
    }
}