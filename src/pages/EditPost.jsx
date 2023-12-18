/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {Container, PostForm} from "../components/index";
import { useNavigate, useParams } from "react-router-dom";
import Services from "../appwrite/config_service";

function EditPost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();
    const service = new Services();

    useEffect(() => {
        if(slug) {
            service.getPost(slug)
            .then((post) => {
                if(post) {
                    setPost(post);
                }
            })
        }
        else {
            navigate("/");
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
}

export default EditPost