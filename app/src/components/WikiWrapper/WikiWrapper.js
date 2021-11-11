import React from "react";
import './WikiWrapper.css'
import {WikiPost} from "../WikiPost";
import { WikiCreateButton } from "../WikiCreatePost";

export function WikiWrapper(props) {

    return (
        <div className='wrapper'>
            <div className='wiki-wrapper'>
                <WikiCreateButton/>
                Вики находится в разработке
                <WikiPost>
                    
                </WikiPost>
            </div>
        </div>
    );
}