export const actionTypes = {
    NEWS_LIST_HEADLINES_SUCCESS: "NEWS_LIST_HEADLINES_SUCCESS",
    NEWS_LIST_HEADLINES_REQUEST: "NEWS_LIST_HEADLINES_REQUEST",
};

const InitialState = {
    loading: false,
    newslist: [],
}



const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case actionTypes.NEWS_LIST_HEADLINES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.NEWS_LIST_HEADLINES_SUCCESS:
            return {
                loading: false,
                newslist: action.result.concat(action.result),
            }
        default: return state
    }
}

export default reducer
