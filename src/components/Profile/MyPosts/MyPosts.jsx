import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>My Posts
            <div/>
            <textarea></textarea>
            <button>Add Post</button>
            <button>Remove</button>

            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='0' />
                <Post message="It's my first post" likesCount='9'/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )

}
export default MyPosts;
