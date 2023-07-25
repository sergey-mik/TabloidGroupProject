import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostById } from '../modules/postManager'

export default function PostDetail() {
  const [post, setPost] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getPostById(id).then(setPost)
  }, [id])

const handleViewComments = () => {
  navigate(`/comments/${id}`)
}

const handleAddComment = () => {
  navigate(`/comments/add/${id}`)
}

  if (!post) {
    return null
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Published on: {new Date(post.publishDateTime).toLocaleDateString()}</p>
      <p>Author: {post.userProfile?.displayName}</p>
      <div>{post.content}</div>
      <button onClick={handleViewComments}>View Comments</button>
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  )
}
