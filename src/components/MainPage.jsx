import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import "../assets/styles/MainPage.css"

function MainPage() {
  const [articles, setArticles] = useState([])
  const [msg, setMsg] = useState('')
  useEffect(() => {
    fetchData()
  }, []);
  const fetchData = () => {
    axios.get('/post')
      .then(res => {
        setArticles(res.data)
        console.log(res.data); // Data from API
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  const handleDelete = (post) => {
    if (window.confirm(`Are you sure you want to delete post: ${post.title}`)) {
      axios.delete(`/post/${post.id}`)
        .then(res => {
          console.log('Post deleted:', res.data); // Article deleted
          // After deletion, update the list of articles
          setArticles(articles.filter(article => article.id !== post.id));
          setMsg('Post was deleted')
          // Clear the message after 1 second
          setTimeout(() => {
            setMsg(''); // Clear the message after 1 second
          }, 2000); // 1000 ms = 1 second
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  };
  return (
    <div className="main">

      <section className="articles">
        <div className="container">
          <h1 className="main-page-title">Articles</h1>
          <div className='d-flex'>
            <Link to="/createpost" className="btn">new Post</Link>
          </div>
          <div className="msg">{msg}</div>
          <div className="articles-container">
            {articles && articles.map((article) => (
              <div key={article.id} className="article-card">
                <img src={article.image} alt={article.title} className="article-image" />
                <h2 className="article-title">{article.title}</h2>
                <Link
                  to={`/post/${article.id}`}
                  
                  className="view-button mr1"
                >
                  View
                </Link>
                <Link
                  to={`/editpost/${article.id}`}
                  className="view-button"
                >
                  Edit
                </Link>
                <button className="mt1" onClick={() => handleDelete(article)}>Delete</button>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default MainPage