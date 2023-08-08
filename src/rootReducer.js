const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "CREATE":
            return { ...state, memes: [ ...state.memes, action.payload ] };
        case "DELETE":
            return { ...state, memes: state.memes.filter(meme => meme.id !== action.payload) };
        default:
            return state;
    }
}

export default rootReducer;