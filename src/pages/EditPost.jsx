import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                if (slug) {
                    const fetchedPost = await appwriteService.getPost(slug);
                    if (fetchedPost) {
                        setPost(fetchedPost);
                    } else {
                        navigate('/');
                    }
                } else {
                    navigate('/');
                }
            } catch (error) {
                setError('Error fetching post');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug, navigate]);

    if (loading) {
        return (
            <div className="py-8 text-center">
                <Container>
                    <h1 className="text-2xl font-bold">Loading post...</h1>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-8 text-center">
                <Container>
                    <h1 className="text-2xl font-bold">{error}</h1>
                </Container>
            </div>
        );
    }

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null;
}

export default EditPost;
