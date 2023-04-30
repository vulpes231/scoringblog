import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from './postsSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const onTitleChange = e => setTitle(e.target.value);
    const onContentChange = e => setContent(e.target.value);

    const savePost = () => {
        if (title && content) {
            dispatch(
                postAdded({
                    
                })
            );

            setTitle('')
            setContent('')
        }
    };


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
                    className='border p-2 rounded-lg hover:bg-slate-400 hover:text-slate-800 mt-4 mb-4' type='button' 
                    onClick={savePost}
                >
                    Save Post
                </button>
            </form>
        </div>
    </section>
  )
}

export default AddPostForm