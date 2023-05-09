import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    // console.log(posts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article 
          key={post.id} 
          className='mb-2 border rounded-xl p-4 text-slate-100 flex flex-col gap-2' 
        >
            <h3 className='font-bold text-2xl cursor-pointer'>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='text-sm'>
              <PostAuthor userId={ post.userId }/>
              <TimeAgo timestamp={ post.date }/>
            </p>
            <ReactionButtons post={post} />
        </article>
        
    ));

    return (
      <section>
        <div className='max-w-[1200px] mx-auto'>
          <h2 
            className='font-bold text-2xl text-slate-100 mb-4'
          > 
            Posts 
          </h2>

          <div className='grid lg:grid-cols-3 gap-4'>
          {renderedPosts}
          </div>

        </div>
      </section>
    );
  
};

export default PostsList;