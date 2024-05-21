import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


export function PostsDetailPage() {
    const [post, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    let url = 'https://jsonplaceholder.typicode.com/posts'

    async function getPosts(){
        setLoading(true)
        try{
            const response = await axios.get(`${url}/${id}`);
            setPosts(response.data);
        }
        catch (error){
            console.log(error);
        }
        finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getPosts()
    }, []);

    const {id} = useParams();
    console.log(id)

    return (
        <div>
            {
                loading ? <div>Loading ...</div>:
                    <div>
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                    </div>

            }
        </div>
    );
}

