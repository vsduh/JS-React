import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

                <div className={s.item}>
                    <img src="https://i.pinimg.com/736x/e1/13/f6/e113f64f714bcf8a32d0b183727e8f38--avatar-film-avatar-theme.jpg" />
                    {props.message }
                    <div>
                    <span>like</span>
                    </div>
                </div>
    )

}
export default Post;
