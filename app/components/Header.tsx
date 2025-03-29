'use client';

import Link from 'next/link';
import { useState } from 'react';
// import './layout.css';
import '../styles/layout.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="header-logo">
          <span style={{ color: '#818cf8' }}>My</span>Blog
        </Link>

        <nav className="nav-menu">
          <Link href="/products" className="nav-link">产品</Link>
          <Link href="/solution" className="nav-link">解决方案</Link>
          <Link href="/templates" className="nav-link">模板中心</Link>
          <Link href="/help" className="nav-link">帮助中心</Link>
        </nav>

        <div className="header-buttons">
          <button className="login-button">登录</button>
          <button className="try-button">免费试用</button>
        </div>

        {/* 移动端菜单按钮 */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ display: 'none' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link href="/products" className="mobile-menu-link">产品</Link>
          <Link href="/solution" className="mobile-menu-link">解决方案</Link>
          <Link href="/templates" className="mobile-menu-link">模板中心</Link>
          <Link href="/help" className="mobile-menu-link">帮助中心</Link>
          <div className="mobile-menu-buttons">
            <button className="login-button">登录</button>
            <button className="try-button">免费试用</button>
          </div>
        </div>
      )}
    </header>
  );
} 