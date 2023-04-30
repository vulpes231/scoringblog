import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: '1',
        title: 'Learning redux is fun!',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam delectus, mollitia sequi ipsum vero ullam cumque dignissimos similique asperiores nihil, facere quis quidem voluptates blanditiis est quasi consequatur omnis suscipit?',

    },
    {
        id: '2',
        title: 'Chelsea Lost Again !',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, corrupti soluta quae repellat sequi numquam odio, laborum reprehenderit molestias beatae explicabo praesentium debitis velit expedita.',

    },
    
]


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action) => {
                state.push(action.payload)
            },
            prepare: (title, content) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    }
                }
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;