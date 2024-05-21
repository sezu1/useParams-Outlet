import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


export function PostsPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    let url = 'https://jsonplaceholder.typicode.com/posts'

    async function getPosts(){
        setLoading(true)
        try {
            const response = await axios.get(url);
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

    return (
        <div>
            <h2>Posts page</h2>

          <ul>
              {
                  loading ? <div>Loading ...</div> :
                  posts.map(post => (
                      <li key={post.id} className='posts_list'>
                          <li>{post.title}</li>
                          <Link to={`/posts/${post.id}`}>
                              <a href="">Подробнее</a>
                          </Link>
                      </li>
                  ))
              }
          </ul>
        </div>
    );
}

