const initialState = {
    searchResults: ""
 }

 const SEARCH_RESULTS = "SEARCH_RESULTS"

 function reducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_RESULTS:
            let { results } = action
            return {
                ...state,
                searchResults: action.payload
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

 export default reducer;
