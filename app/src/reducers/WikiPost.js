export const SET_ERROR = 'SET_ERROR';
export const SET_POST_LIST = 'SET_POST_LIST';

const initialState = {
    postList: [],
    posts: {},
    isError: false
};

export function wikiPosts(state = initialState, action) {
    switch (action.type) {
        case SET_POST_LIST: {
            return {
                postList: action.payload.postList,
                posts: action.payload.posts,
                isError: false,
            };
        }

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