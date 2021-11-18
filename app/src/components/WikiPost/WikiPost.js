import React from 'react';
import { useSelector } from 'react-redux';
import './WikiPost.css';
import { useParams, Link } from 'react-router-dom';


export function WikiPost(props) {
    const {id} = props;
    const post = useSelector((state) => state.wikiPosts.posts[id]);
    const {title} = post;
   
    return (
        <Link to={'/wiki/post/' + id} style={{textDecoration: 'none'}}>
            <div className='wiki-post'>
                <div className='wiki-post-title'>
                    {title}
                </div>
                
            </div>
        </Link>
    );
}


export function WikiPage(props) {
    const params = useParams();
    const {postId} = params;
    const post = useSelector((state) => state.wikiPosts.posts[postId]);
    return (
        <div className='wrapper'>
            <div className='wrapper-wiki-page'>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Link to='/wiki' style={{textDecoration: 'none'}}>
                    <div className='back-button-wiki-page'>
                        Назад
                    </div>
                </Link>
            </div>
        </div>
    );
}