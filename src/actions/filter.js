import {CHANGE_SEARCH, SET_SORT} from "./types";

export const setSort = (type) => ({
    type: SET_SORT,
    payload: type
});

export const changeSearchText = (text) => ({
    type: CHANGE_SEARCH,
    payload: text
});