import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import  sub  from "date-fns/sub";


const initialState = [
    {
        id: '1',
        title: 'How to make $1 Million USD in 5 secs',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam delectus, mollitia sequi ipsum vero ullam cumque dignissimos similique asperiores nihil, facere quis quidem voluptates blanditiis est quasi consequatur omnis suscipit?',
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            check: 0,
            heart: 0,
            fire: 0,
            thumbsDown: 0,
            smile: 0,
            thinking: 0,
            eyes: 0,
        }
    },
    {
        id: '2',
        title: 'Nigerian singer popularly known as Portable submits bid to buy Manchester United !',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, corrupti soluta quae repellat sequi numquam odio, laborum reprehenderit molestias beatae explicabo praesentium debitis velit expedita.',
        date: sub(new Date(), {minutes: 5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            check: 0,
            heart: 0,
            fire: 0,
            thumbsDown: 0,
            smile: 0,
            thinking: 0,
            eyes: 0,
        }
    },
    
]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            check: 0,
                            heart: 0,
                            fire: 0,
                            thumbsDown: 0,
                            smile: 0,
                            thinking: 0,
                            eyes: 0,
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            // find post
            const existingPost = state.find(post =>post.id === postId)
            // update reaction count
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;