import {schema, normalize} from 'normalizr';
import { SET_POST_LIST } from '../reducers/WikiPost';

const wikiPostSchema = new schema.Entity('wiki_post');

function setPosts(data) {
    const {result, entities} = normalize(data, [wikiPostSchema]);
    console.log(result);
    console.log(data);
    return {
        type: SET_POST_LIST,
        payload: {
            postList: result,
            posts: entities.wiki_post,
        },
    };
}


export function fetchWikiPosts() {
    return async (dispatch) => {
        const response = await fetch('http://localhost:3001/wiki-posts');
        const data = await response.json();
        dispatch(setPosts(data));
    };
}