import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { WikiCreateForm } from './WikiCreateForm';

import { setWikiModalData, closeWikiModal } from '../../actions/WikiModal';


export function WikiCreateButton() {
    const dispatch = useDispatch();
    return (
        <button
            onClick={(event) => {
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
            </button>
    );
}