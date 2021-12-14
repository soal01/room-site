export const SET_ERROR = 'SET_ERROR';
export const SET_MOUNTH_LIST = 'SET_MOUNTH_LIST';

const initialState = {
    mounthList: [],
    mounths: {},
    isError: false
};

export function cleaningMounths(state = initialState, action) {
    switch (action.type) {
        case SET_MOUNTH_LIST: {
            return {
                mounthList: action.payload.mounthList,
                mounths: action.payload.mounths,
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