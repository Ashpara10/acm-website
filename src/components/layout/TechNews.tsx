"use client";
import React, { useState, useEffect } from "react";
import { X, Newspaper } from 'lucide-react';

interface NewsItem {
  title: string;
  url: string;
}
const TechNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [showNews, setShowNews] = useState(false);
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
      fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json')
          .then(response => response.json())
          .then(data => setNews(data.articles))
          .catch(error => console.error('Error fetching news:', error));
  }, []);

  useEffect(() => {
      const interval = setInterval(() => {
          if (!isDialogOpen) {
              setCurrentHeadline(prevHeadline => (prevHeadline + 1) % news.length);
              setShowMessageBox(true);
              setTimeout(() => {
                  setShowMessageBox(false);
              }, 5000);
          }
      }, 15000);
      return () => clearInterval(interval);
  }, [news, isDialogOpen]);

  const toggleNews = () => {
      setShowNews(!showNews);
      setIsDialogOpen(!showNews);
  };

  return (
    <div data-dial-init className="fixed end-6 bottom-6 group z-50">
      {showNews && (
            <div 
                style={{ 
                    position: 'absolute', 
                    bottom: '50px', // Adjust to make it appear above the button
                    right: '5px', 
                    padding: '16px', 
                    border: '1px solid #ccc', 
                    borderRadius: '8px', 
                    backgroundColor: '#161a1d', 
                    boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1)', 
                    width: '30vw', 
                    height: '50vh', 
                    overflowY: 'auto',
                    color: '#f0f7ff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    animation: 'fadeIn 0.3s ease-in-out',
                    marginBottom: '16px', // Add margin to the dialog box
                }}
            >
              <style>
                  {`
                      @keyframes fadeIn {
                          0% { opacity: 0; transform: scale(0.9); }
                          100% { opacity: 1; transform: scale(1); }
                      }
                  `}
              </style>
              <div style={{ marginBottom: '16px', textAlign: 'center' }}>
                  <a 
                      href={news.length > 0 ? news[currentHeadline].url : '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: '#f0f7ff', textDecoration: 'none' }}
                  >
                      {news.length > 0 && news[currentHeadline].title}
                  </a>
              </div>
              <ul style={{ width: '100%', padding: 0, listStyle: 'none' }}>
                  {news.map((article, index) => (
                      <li 
                          key={index} 
                          style={{ 
                              marginBottom: '8px', 
                              padding: '8px', 
                              border: '1px solid #ddd', 
                              borderRadius: '4px', 
                              backgroundColor: '#1e2225', 
                              cursor: 'pointer',
                          }}
                          onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
                      >
                          <span style={{ color: '#f0f7ff', fontSize: '0.875rem' }}>
                              {article.title}
                          </span>
                      </li>
                  ))}
              </ul>
            </div> 
      )}
      
      {showMessageBox && (
          <div 
              style={{ 
                  position: 'absolute', 
                  bottom: '65px', // Add margin between the message box and the button
                  right: '5px', 
                  padding: '16px', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px', 
                  backgroundColor: '#161a1d', 
                  boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.1)', 
                  width: '30vw', // Increase the width of the message box
                  height: '10vh', // Decrease the height of the message box
                  color: '#f0f7ff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'slideUp 0.4s ease-in-out, fadeOut 0.3s ease-in-out 4.7s',
              }}
          >
              <style>
                  {`
                      @keyframes slideUp {
                          0% { opacity: 0; transform: translateY(100%); }
                          100% { opacity: 1; transform: translateY(0); }
                      }
                      @keyframes fadeOut {
                          0% { opacity: 1; }
                          100% { opacity: 0; }
                      }
                  `}
              </style>
              <div style={{ textAlign: 'center' }}>
                  <a 
                      href={news.length > 0 ? news[currentHeadline].url : '#'} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: '#f0f7ff', textDecoration: 'none' }}
                  >
                      {news.length > 0 && news[currentHeadline].title}
                  </a>
              </div>
          </div>
      )}
      <button 
          onClick={toggleNews}
          style={{
              backgroundColor: '#3184d7',
              opacity: 1,
              borderRadius: '50%',
              padding: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease-in-out',
          }}
          onMouseOver={(e) => e.currentTarget.style.opacity = '0.90'}
          onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
      >
          {showNews ? (
              <X color="#f0f7ff" strokeWidth={1.5} style={{ 
                  transition: 'transform 0.3s ease-in-out', 
                  transform: showNews ? 'rotate(90deg)' : 'rotate(0deg)'
              }} /> 
          ) : (
              <Newspaper color="#f0f7ff" strokeWidth={1.5}/> 
          )}
      </button>
    </div>
  );
};

export default TechNews;
