import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article className='mb-2 border rounded-xl p-4 text-slate-100' key={post.id}>
            <h3 className='font-bold text-2xl'>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
        </article>
    ));
  return (
    <section>
       <div className='max-w-[1200px] mx-auto'>
        <h2 className='font-bold text-2xl text-slate-100 mb-4'>Posts</h2>
        <div className='grid lg:grid-cols-3 gap-4'>
         {renderedPosts}
        </div>
       </div>
    </section>
  );
};

export default PostsList;