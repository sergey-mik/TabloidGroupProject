import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Hello from './Hello'
import TagList from './Tag/TagList'
import UserProfileList from './UserProfile'
import PostList from './PostList'
import CategoryList from './CategoryList'
import CategoryAddForm from './CategoryAddForm'
import PostDetail from './PostDetail'
import TagAddForm from './Tag/TagAddForm'
import PostForm from './PostForm'
import Comments from './Comments'
import TagDeleteConfirmation from './Tag/TagDeleteConfirmation'
import AddComment from './AddComment'

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}
          />
          <Route path="tag">
            <Route
              path="manager"
              element={isLoggedIn ? <TagList /> : <Navigate to="/login" />}
            />
            <Route path="add" element={isLoggedIn ? <TagAddForm /> : <Navigate to="/login" />} />
            <Route path="delete/:id" element={isLoggedIn ? <TagDeleteConfirmation /> : <Navigate to="/login" />} />
          </Route>
          <Route path="category">
            <Route
              path="manager"
              element={isLoggedIn ? <CategoryList /> : <Navigate to="/login" />}
            />
            <Route
              path="add"
              element={
                isLoggedIn ? <CategoryAddForm /> : <Navigate to="/login" />
              }
            />
          </Route>
          <Route
            path="newPost"
            element={isLoggedIn ? <PostForm /> : <Navigate to="/login" />}
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="userprofiles" element={<UserProfileList />} />
        <Route path="posts" element={<PostList />} />
        <Route
          path="posts/:id"
          element={isLoggedIn ? <PostDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="comments/:id"
          element={isLoggedIn ? <Comments /> : <Navigate to="/login" />}
        />
        <Route
          path="/comments/add/:postId"
          element={isLoggedIn ? <AddComment /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<p>Whoops, nothing here...</p>} />
      </Routes>
    </main>
  )
}
