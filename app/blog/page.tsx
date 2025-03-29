import React from 'react';
import PageTransition from '../components/PageTransition';
import '../styles/blog.scss';

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="content-container">
        <div className="blog-content">
          <h1 className="blog-title">博客</h1>
          <div className="blog-grid">
            <div className="blog-card">
              <p className="blog-text">博客内容正在建设中...</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 