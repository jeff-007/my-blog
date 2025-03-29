'use client';

import Link from 'next/link';
import './layout.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo 和描述 */}
          <div className="footer-about">
            <Link href="/" className="header-logo" style={{ marginBottom: '1rem', display: 'inline-block' }}>
              <span style={{ color: '#818cf8' }}>My</span>Blog
            </Link>
            <p className="footer-text">
              企业级的AI应用开发平台，无论团队编程技能如何，都能快速创建由AI驱动的应用。
            </p>
          </div>

          {/* 产品 */}
          <div>
            <h3 className="footer-title">产品</h3>
            <ul className="footer-links">
              <li><Link href="/agent" className="footer-link">Agent</Link></li>
              <li><Link href="/workflow" className="footer-link">工作流</Link></li>
              <li><Link href="/knowledge" className="footer-link">知识库</Link></li>
            </ul>
          </div>

          {/* 解决方案 */}
          <div>
            <h3 className="footer-title">解决方案</h3>
            <ul className="footer-links">
              <li><Link href="/templates" className="footer-link">模板中心</Link></li>
              <li><Link href="/price" className="footer-link">价格</Link></li>
            </ul>
          </div>

          {/* 关于我们 */}
          <div>
            <h3 className="footer-title">关于我们</h3>
            <ul className="footer-links">
              <li><Link href="/about" className="footer-link">公司介绍</Link></li>
              <li><Link href="/news" className="footer-link">新闻动态</Link></li>
              <li><Link href="/contact" className="footer-link">联系我们</Link></li>
            </ul>
          </div>
        </div>

        {/* 底部信息 */}
        <div className="footer-bottom">
          <p>Copyright © {new Date().getFullYear()} MyBlog AI. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/privacy" className="footer-link">隐私政策</Link>
            <Link href="/terms" className="footer-link">服务条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 