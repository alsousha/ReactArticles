import React from 'react'
import { Link } from 'react-router-dom';
import "../assets/styles/MainPage.css"

function MainPage() {
    const articles = [
        {
          id: 1,
          title: "React Basics: Understanding Components",
          image: "https://via.placeholder.com/150",
          content: "Learn the fundamentals of React and how components work."
        },
        {
          id: 2,
          title: "Mastering React Router",
          image: "https://via.placeholder.com/150",
          content: "A complete guide to routing in React applications."
        },
        {
          id: 3,
          title: "Styling in React: Best Practices",
          image: "https://via.placeholder.com/150",
          content: "Explore various ways to style your React applications."
        }
      ];
      
  return (
    <div className="main">
      
      <section className="articles">
        <div className="container">
            <h1 className="main-page-title">Articles</h1>
            {/* <div className='d-flex'>
                <Link to="/newpost" className="btn">new Post</Link>
            </div> */}
            <div className="articles-container">
                {/* {articles&&articles.map((article) => (
                <div key={article.id} className="article-card">
                    <img src={article.image} alt={article.title} className="article-image" />
                    <h2 className="article-title">{article.title}</h2>
                    <button className="view-button">View</button>
                </div>
                ))} */}

                {articles&&articles.map((article) => (
                <div key={article.id} className="article-card">
                    <img src={article.image} alt={article.title} className="article-image" />
                    <h2 className="article-title">{article.title}</h2>
                    <Link 
                        to={`/post/${article.id}`}
                        state={{ post: article }}
                        className="view-button"
                    >
                        View
                    </Link>
                </div>
                ))}
            </div>
        </div>
      </section>

    </div>
  )
}

export default MainPage
