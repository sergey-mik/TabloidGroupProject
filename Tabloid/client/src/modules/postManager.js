import 'firebase/auth'
import firebase from 'firebase/app'

export const getToken = () => firebase.auth().currentUser.getIdToken()

const apiUrl = '/api/post'

export const addPost = (post) => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post)
    }).then((res) => {
      if (res.ok) {
        console.log("Post made successfully")
        return res.json();
      } else {
        throw new Error('An unknown error occurred while trying to get posts.');
      }
    });
  });
}

export const getAllPosts = () => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('An unknown error occurred while trying to get posts.')
      }
    })
  })
}

export const getPostById = (id) => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(`Failed to get post ${id}`)
      }
    })
  })
}
