import {schema, normalize} from 'normalizr';
import { SET_POST_LIST } from '../reducers/WikiPost';
import { ApiClientService } from '../services/ApiClientService';

const wikiPostSchema = new schema.Entity('wiki_post');

function setPosts(data) {
    //console.log(data);
    const {result, entities} = normalize(data, [wikiPostSchema]);
    //console.log(result);
    
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
        /*const response = await fetch('http://localhost:3001/wiki-posts');
        const data = await response.json();
        dispatch(setPosts(data));*/
        const data = await ApiClientService('wiki_posts/');
        dispatch(setPosts(data));
    };
}