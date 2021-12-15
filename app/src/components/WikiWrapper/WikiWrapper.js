import React from "react";
import './WikiWrapper.css'
import {WikiPost} from "../WikiPost";
import { WikiCreateButton } from "../WikiCreatePost";
import { useDispatch, useSelector } from "react-redux";
import { fetchWikiPosts } from "../../actions/WikiPosts";

export function WikiWrapper(props) {
    const {isLogin} = props;
    const dispatch = useDispatch();
    const postList = useSelector((state) => {
        //console.log(state);
        return state.wikiPosts.postList;
    });


    React.useEffect(()=> {
        dispatch(fetchWikiPosts());
    }, []);





    return (
        <div className='wrapper'>
            <div className='wiki-wrapper'>
                {isLogin ?
                <WikiCreateButton/>:
                <div></div>
                }
                {postList.map((postId)=>(
                    <WikiPost id={postId}/>
                ))}
            </div>
        </div>
    );
}