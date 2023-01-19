import React, { Children, useState } from 'react'
import './Twittercard.css';


export const TwitterCard = ({formatUserName, userName, name, initalIsFollowing}) => {
    
    const [isFollowing, setIsFollowing] = useState(initalIsFollowing)
    
    const imageSrc = `https://unavatar.io/${userName}`;

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

    const handleClick = (() => {
        setIsFollowing(!isFollowing);
    });

return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                alt="Imagen-perfil" 
                src={imageSrc}/>

                <div className='tw-followCard-info'>
                    {/* {Children} */}
                    <strong>{name}</strong>
                    {/* <span className='tw-followCard-userName'>{formatUserName(userName)}</span> */}
                    <span className='tw-followCard-userName'>@{(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
export default TwitterCard;