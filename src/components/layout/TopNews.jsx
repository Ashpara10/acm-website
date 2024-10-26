"use client";

import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, IconButton, Fab } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const TopNews = () => {
    const [news, setNews] = useState([]);
    const [showNews, setShowNews] = useState(false);
    const [currentHeadline, setCurrentHeadline] = useState(0);
    const [showMessageBox, setShowMessageBox] = useState(false);

    useEffect(() => {
        fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json')
            .then(response => response.json())
            .then(data => setNews(data.articles))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeadline(prevHeadline => (prevHeadline + 1) % news.length);
            setShowMessageBox(true);
            setTimeout(() => {
                setShowMessageBox(false);
            }, 3000);
        }, 10000);
        return () => clearInterval(interval);
    }, [news]);

    const toggleNews = () => {
        setShowNews(!showNews);
    };

    return (
        <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
            <Fab 
                onClick={toggleNews}
                sx={{
                    backgroundColor: '#3184d7 !important',
                    opacity: 1,
                    '&:hover': {
                        backgroundColor: '#3184d7 !important',
                        opacity: 0.80,
                    }
                }}
            >
                {showNews ? (
                    <CloseIcon sx={{ color: '#f0f7ff', transition: 'transform 0.3s ease-in-out', transform: showNews ? 'rotate(90deg)' : 'rotate(0deg)' }} /> 
                ) : (
                    <NewspaperIcon sx={{ color: '#f0f7ff' }} /> 
                )}
            </Fab>
            {showNews && (
                <Box 
                    sx={{ 
                        position: 'absolute', 
                        bottom: 56, // Adjust to make it appear above the button
                        right: 0, 
                        p: 2, 
                        border: '1px solid #ccc', 
                        borderRadius: 2, 
                        backgroundColor: '#161a1d', 
                        boxShadow: 3, 
                        width: '25vw', 
                        height: '25vh', 
                        overflowY: 'auto',
                        color: '#f0f7ff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        animation: 'fadeIn 0.3s ease-in-out',
                        marginBottom: 2, // Add margin to the dialog box
                        '@keyframes fadeIn': {
                            '0%': { opacity: 0, transform: 'scale(0.9)' },
                            '100%': { opacity: 1, transform: 'scale(1)' },
                        }
                    }}
                >
                    <Typography variant="body1" component="div" sx={{ mb: 2, textAlign: 'center' }}>
                        <a href={news.length > 0 ? news[currentHeadline].url : '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#f0f7ff', textDecoration: 'none' }}>
                            {news.length > 0 && news[currentHeadline].title}
                        </a>
                    </Typography>
                    <List sx={{ width: '100%' }}>
                        {news.map((article, index) => (
                            <ListItem 
                                key={index} 
                                component="a" 
                                href={article.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                button 
                                sx={{ 
                                    mb: 1, 
                                    p: 1, 
                                    border: '1px solid #ddd', 
                                    borderRadius: 1, 
                                    backgroundColor: '#1e2225', 
                                    '&:hover': { 
                                        backgroundColor: '#2a2e31' 
                                    } 
                                }}
                            >
                                <ListItemText primary={article.title} sx={{ color: '#f0f7ff', fontSize: '0.875rem' }} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
            {showMessageBox && (
                <Box 
                    sx={{ 
                        position: 'absolute', 
                        bottom: 96, // Add margin between the message box and the button
                        right: 0, 
                        p: 2, 
                        border: '1px solid #ccc', 
                        borderRadius: 2, 
                        backgroundColor: '#161a1d', 
                        boxShadow: 3, 
                        width: '30vw', // Increase the width of the message box
                        height: '10vh', // Decrease the height of the message box
                        color: '#f0f7ff',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        animation: 'slideUp 0.3s ease-in-out, fadeOut 0.3s ease-in-out 2.7s',
                        '@keyframes slideUp': {
                            '0%': { opacity: 0, transform: 'translateY(100%)' },
                            '100%': { opacity: 1, transform: 'translateY(0)' },
                        },
                        '@keyframes fadeOut': {
                            '0%': { opacity: 1 },
                            '100%': { opacity: 0 },
                        }
                    }}
                >
                    <Typography variant="body2" component="div" sx={{ textAlign: 'center' }}>
                        <a href={news.length > 0 ? news[currentHeadline].url : '#'} target="_blank" rel="noopener noreferrer" style={{ color: '#f0f7ff', textDecoration: 'none' }}>
                            {news.length > 0 && news[currentHeadline].title}
                        </a>
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default TopNews;