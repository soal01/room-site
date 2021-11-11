import React from 'react';
import './WikiPost.css';

export function WikiPost() {

    let title = "Заголовок"

    return (
        <div className='wiki-post'>
            <div className='wiki-post-title'>
                {title}
            </div>
            
        </div>
    );
}