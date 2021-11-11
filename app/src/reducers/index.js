import { combineReducers } from "redux";
import { wikiPosts } from "./WikiPost";
import { wikiModal } from "./WikiModal";

export const reducers = combineReducers({wikiPosts, wikiModal});