import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://cstor.nn2.ru/users/users/foto/188456-2016-03-20-11.jpg.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <div>my posts

            <div className={s.posts}>
                <div>New post
                </div>
                <div className={s.item}>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Profile;
