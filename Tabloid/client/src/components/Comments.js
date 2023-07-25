import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAllCommentsByPostId, deleteComment, } from '../modules/commentManager'
import { getPostById } from '../modules/postManager'

export default function Comments() {
  const [comments, setComments] = useState([])
  const { id } = useParams()
  const [post, setPost] = useState({})

  useEffect(() => {
    getAllCommentsByPostId(id).then(setComments)
    getPostById(id).then(setPost)
  }, [id])


const handleDeleteComment = (id) => {
  if (window.confirm('Are you sure you want to delete this comment?')) {
    deleteComment(id).then(() => {
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== id)
      )
    })
  }
}

  return (
    <div>
      <h2>{post.title}</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h5>{comment.subject}</h5>
          <p>{comment.content}</p>
          <p>By: {comment.userProfile?.displayName}</p>
          <p>
            Created on: {new Date(comment.createDateTime).toLocaleDateString()}
          </p>
          <button onClick={() => handleDeleteComment(comment.id)}>
            Delete
          </button>
        </div>
      ))}
      <Link to={`/posts/${id}`}>Back to Post</Link>
    </div>
  )
}
