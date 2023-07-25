import { getToken } from "./authManager";

const apiUrl = "/api/tag"

export const getAllTags = () => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            else {
                throw new Error("An unknown error occurred while trying to get tags.",)
            }
        })
    })
}

export const addTag = (tag) => {
    return getToken().then((token) => {
        return fetch(apiUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tag)
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            else if (res.status === 401) {
                throw new Error("Unauthorized");
            }
            else {
                throw new Error("An unknow error occurred while trying to create a tag.")
            }
        })
    })
}

export const deleteTag = (id) => {
    return getToken().then((token) => {
        return fetch(`${apiUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    });
};
