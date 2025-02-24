import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Music from './pages/music'
import Header from './compornents/header'
import Footer from './compornents/footer'
import Banner from './compornents/banner'
import Blog from './pages/blog'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <div className = "header-title">
            <h1>HURTAの楽曲まとめ</h1>
        </div>
        <Header /> 
        <div className="main-content">
        
        <div className="page-content">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Banner /> 
        
        </div>
        <Footer />
        
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
