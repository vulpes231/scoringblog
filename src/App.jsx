import React from "react"
import PostsList from "./features/posts/PostsList"
import AddPostForm from "./features/posts/AddPostForm"

function App() {
  

  return (
    <main className="min-h-screen bg-slate-700 p-6 flex flex-col">
      <AddPostForm />
      <PostsList />
    </main>
    
  )
}

export default App
