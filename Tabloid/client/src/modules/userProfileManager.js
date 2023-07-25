import { getToken } from "./authManager";
import firebase from "firebase/app";
import "firebase/auth";

const apiUrl = "/api/userprofile";

export const getAllUserProfiles = () => {
  return getToken().then((token) => {
    return fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("An unknown error occurred while trying to get user profiles.");
        }
      })
      .catch((error) => {
        throw new Error(`Error: ${error.message}`);
      });
  });
};

export const getCurrentUserProfile = () => {
  return getToken().then((token) => {
    return fetch(`${apiUrl}/${firebase.auth().currentUser.uid}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(
            'An unknown error occurred while trying to get current user profile.'
          )
        }
      })
      .catch((error) => {
        throw new Error(`Error: ${error.message}`)
      })
  })
}
