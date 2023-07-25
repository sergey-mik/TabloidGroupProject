import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts } from '../modules/postManager'

export default function PostList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Get all posts
    getAllPosts().then((postsFromAPI) => {
      const currentDateTime = new Date()
      // Filter the list to only include approved posts with a past publication date
      const approvedPastPosts = postsFromAPI
        .filter(
          (p) => p.isApproved && new Date(p.publishDateTime) < currentDateTime
        )
        // Sort the posts by publication date in descending order
        .sort(
          (a, b) => new Date(b.publishDateTime) - new Date(a.publishDateTime)
        )

      // Set the approved posts to state
      setPosts(approvedPastPosts)
    })
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <p>Author: {post.userProfile.displayName}</p>
            <p>Category: {post.category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
