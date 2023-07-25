import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { addComment } from '../modules/commentManager'
import { getCurrentUserProfile } from '../modules/userProfileManager'

export default function AddComment() {
  const { postId } = useParams()
  const navigate = useNavigate()

  const [comment, setComment] = useState({
    postId: postId,
    subject: '',
    content: '',
    createDateTime: new Date(),
  })
  
const submitForm = (event) => {
  event.preventDefault()

  getCurrentUserProfile()
    .then((userProfile) => {
      const updatedComment = { ...comment, userProfileId: userProfile.id }
      return addComment(updatedComment)
    })
    .then(() => navigate(`/comments/${postId}`))
    .catch((error) => console.error(error))
}

  const handleInputChange = (event) => {
    const newComment = { ...comment }
    newComment[event.target.id] = event.target.value
    setComment(newComment)
  }

  return (
    <form>
      <h2>Add Comment</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            onChange={handleInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Subject"
            value={comment.subject}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            onChange={handleInputChange}
            required
            className="form-control"
            placeholder="Content"
            value={comment.content}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={submitForm}>
        Save Comment
      </button>
    </form>
  )
}
