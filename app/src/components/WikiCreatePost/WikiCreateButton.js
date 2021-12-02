import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { WikiCreateForm } from './WikiCreateForm';
import './WikiCreatePost.css';
import { setWikiModalData, closeWikiModal } from '../../actions/WikiModal';
import { Link } from 'react-router-dom'


export function WikiCreateButton() {
    const dispatch = useDispatch();
    
    return (
        /*<div className='wiki-create-button'
            onClick={(event) => {
                console.log('egrg');
                event.preventDefault();
                event.stopPropagation();
                dispatch(
                    setWikiModalData(
                        <WikiCreateForm/>
                    )
                );
                }
            }
            >
                Создать статью
            </div>
            */
        <Link to='/wiki/create_article' className='link'>
            <div className='wiki-create-button'>
                Создать статью
            </div>
        </Link>
    );
}