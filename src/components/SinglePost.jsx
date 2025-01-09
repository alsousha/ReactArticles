import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../assets/styles/SinglePost.css"

function SinglePost() {
    const location = useLocation();
	//get post data from MainPage
	const post = location.state?.post;
	console.log(post);

    // const { id } = useParams(); // Получаем ID из URL
    // const post = articles.find((article) => article.id === parseInt(id)); // Находим статью по ID
  
    // if (!post) {
    //   return <h1>Post not found</h1>;
    // }
  
    return (
      <div className="single-post">
        <h1 className="post-title">{post.title}</h1>
        <img src={post.image} alt={post.title} className="post-image" />
        <p className="post-content">{post.content}</p>
      </div>
    );
}

export default SinglePost