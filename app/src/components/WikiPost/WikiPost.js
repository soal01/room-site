import React from 'react';
import { useSelector } from 'react-redux';
import './WikiPost.css';

export function WikiPost(props) {
    const {id} = props;
    const post = useSelector((state) => state.wikiPosts.posts[id]);
    const {title} = post;
   
    return (
        <div className='wiki-post'>
            <div className='wiki-post-title'>
                {title}
            </div>
            
        </div>
    );
}