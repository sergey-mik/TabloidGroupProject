import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { FormGroup, Form } from "reactstrap";
import { getAllCategories } from "../modules/categoryManager";
import { addPost } from "../modules/postManager";


export const PostForm = ({ getPosts }) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [imageLocation, setImageLocation] = useState();
    const [categoryId, setCategoryId] = useState();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories(false).then((data) => {
            setCategories(data)
        })
    }, [])

    const submitPost = (e) => {
        e.preventDefault();
        const post = {
            title,
            content,
            imageLocation,
            categoryId

        }

        addPost(post).then((postData) => { navigate(`/posts/${postData.id}`) });
    };

    return (
        <>
            <h2>New Post</h2>
            <Form onSubmit={submitPost}>
                <FormGroup>
                    <label htmlFor="title">Title: </label> <br />
                    <input name="title" type="text" onChange={(e) => setTitle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="content">Content: </label> <br />
                    <textarea name="content" type="text" onChange={(e) => setContent(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="imageLocation">Image Location URL: </label> <br />
                    <input name="imageLocation" type="text" onChange={(e) => setImageLocation(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>

                    <select onChange={(e) => setCategoryId(e.target.value)}>
                        <option value="0">Select A Category</option>
                        {categories.map((category) => {
                            return <option value={category.id} key={category.id}>{category.name}</option>
                        })
                        }
                    </select>
                </FormGroup>
                <button
                    id="postSaveBtn"
                    color="success">
                    Save
                </button>
            </Form >
        </>
    )
}
export default PostForm