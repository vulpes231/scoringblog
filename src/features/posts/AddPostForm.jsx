import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';


const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    

    const onTitleChange = e => setTitle(e.target.value);
    const onAuthorChange = e => setUserId(e.target.value);
    const onContentChange = e => setContent(e.target.value);

    const savePost = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            );

            setTitle('')
            setContent('')
        }
    };

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)


  return (
    <section>
        <div className='max-w-[1200px] mx-auto flex flex-col text-slate-100'>
            <h2 className='mb-4 font-bold text-xl'>Add a New Post</h2>
            <form className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <label htmlFor='postTitle'>Title </label>
                    <input
                        className='border rounded-lg text-slate-800 outline-none p-2'
                        type="text"
                        id='postTitle'
                        name='postTitle'
                        value={title}
                        onChange={onTitleChange} 
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='postAuthor'>Author </label>
                    <select 
                        id='postAuthor' 
                        value={userId} 
                        onChange={onAuthorChange}
                        className='outline-none rounded-md text-slate-800'
                    >
                        <option value=""></option>
                        {userOptions}
                    </select>
                </div>
               <div className='flex flex-col'>
                    <label htmlFor='postTitle'>Content </label>
                    <textarea 
                        className='border rounded-lg outline-none text-slate-800 p-2'
                        name="postContent" 
                        id="postContent"
                        value={content}
                        onChange={onContentChange}
                    >
                    </textarea>
               </div>
                <button 
                    className={canSave ? 'border p-2 rounded-lg mt-4 mb-4' : ' p-2 rounded-lg bg-slate-400 mt-4 mb-4'} 
                    type='button' 
                    onClick={savePost}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </div>
    </section>
  )
}

export default AddPostForm