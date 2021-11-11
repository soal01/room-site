export const SET_ERROR = 'SET_ERROR';

const initialState = {
    postList: [],
    posts: {},
    isError: false
};

export function wikiPosts(state = initialState, action) {
    switch (action.type) {
        case SET_ERROR: {
            return {
                ...state,
                isError: true
            }
        }




        default: {
            return state;
        }
    }
}