import React from 'react';
import './WikiCreatePost.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export function WikiCreateForm(props) {
    /*const {
        onButtonClick
    } = props;*/
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();


    const onButtonClick = (post) => {
        fetch('http://localhost:3001/wiki-posts',{
            headers: {
                'Content-Type': 'Application/json',
            },
            body: JSON.stringify(post),
            method: 'POST',
            })
            .then((response) => response.json())
            .then((data) => history.push('/wiki'));
    };

    const handleClick = (event) => {
        const article = {
            title,
            description
        };
        event.preventDefault();
        onButtonClick(article);
    };

    const history = useHistory();

    

    return (
        <div className='wrapper'>
            <form className='wiki-create-form'>
                <div className='title-input'>
                    <label>Название статьи</label>
                    <input
                        name='title'
                        type='text'
                        value={title}
                        onChange={(event) => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>

                <div className='description-input'>
                    <label>Текст статьи</label>
                    <textarea
                        name='description'
                        type='text'
                        value={description}
                        onChange={(event) => {
                            setDescription(event.target.value);
                        }}
                    />
                </div>
                
                <Link to='/wiki' style={{textDecoration: 'none'}}>
                    <div className='back-button'>
                        Назад
                    </div>
                </Link>
                
                    <button
                    onClick={handleClick}
                        type='submit'
                        className='submit-button'
                    >
                        Сохранить статью
                    </button>
               
            </form>
            
            
            
        </div>
    );
}