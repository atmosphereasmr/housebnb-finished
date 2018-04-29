const initialState = {
    searchResults: "",
    userID: ""
 }

 const SEARCH_RESULTS = "SEARCH_RESULTS"
 const LOGIN = "LOGIN"

 function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_RESULTS:
            let { results } = action
            return {
                ...state,
                searchResults: action.payload
            }
        case LOGIN:
            let { id } = action
            return {
                ...state,
                userID: action.payload
            }
        default: return state;
    }

 }

 export function search(results) {
    return {
        type: SEARCH_RESULTS,
        payload: results
    }
 }

 export function getID(id) {
    return {
        type: LOGIN,
        payload: id
    }
 }

 export default reducer;
