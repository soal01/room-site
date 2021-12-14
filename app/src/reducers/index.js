import { combineReducers } from "redux";
import { wikiPosts } from "./WikiPost";
import { wikiModal } from "./WikiModal";
import { cleaningMounths } from "./CleaningMounth";

export const reducers = combineReducers({wikiPosts, wikiModal, cleaningMounths});