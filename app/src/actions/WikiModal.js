import { SET_MODAL_DATA, CLEAN_MODAL_DATA } from "../reducers/WikiModal";

export function setWikiModalData(payload) {
    console.log('data');
    return {
        type: SET_MODAL_DATA,
        payload,
    };
}

export function closeWikiModal() {
    return {
        type: CLEAN_MODAL_DATA,
    };
}