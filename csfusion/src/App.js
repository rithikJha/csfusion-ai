import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3011/articles')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error(err));
  }, []);

  console.log(articles)
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Latest Articles</h1>
        <div className="cards">
          {articles.map((article, index) => (
            <Card
              key={article._id}
              title={article.title}
              date={article.date}
              description={article.description}
              image={article.image}
              content={article.content}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
