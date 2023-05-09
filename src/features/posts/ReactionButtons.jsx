import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'


const reactionEmoji = {
    thumbsUp: '👍',
    check: '✅',
    heart: '❤️',
    fire: '🔥',
    thumbsDown: '👎',
    smile: '😊',
    thinking: '🤔',
    eyes: '👀',
};

const ReactionButtons = ({post}) => {

    const dispatch = useDispatch()
    const reactionBtns = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type='button'
                onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))}
                className='mr-2'
            >
                {emoji} {post.reactions[name]}
            </button>
          )
    })
    return <div className='cursor-pointer'>{reactionBtns}</div>
    
};

export default ReactionButtons;