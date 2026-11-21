import { useEffect, useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { Camera, Search, Menu, X, ArrowLeft, ArrowUpLeft, Sun, Moon, Instagram, Facebook, Twitter, ChevronLeft } from 'lucide-react';
import { posts, categories } from './data.js';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Details from './pages/Details';
import NotFound from './pages/NotFound';


function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; }, [dark]);
  return <header className="header"><div className="container nav-wrap">
    <Link to="/" className="brand"><span className="brand-icon"><Camera size={23}/></span><span>عدسة<span className="brand-dot">.</span><small>عالم من الإبداع البصري</small></span></Link>
    <nav className={open ? 'nav-links show' : 'nav-links'}>
      <NavLink to="/" end>الرئيسية</NavLink><NavLink to="/blog">المدونة</NavLink><a href="/#about" onClick={()=>setOpen(false)}>من نحن</a><a href="/#contact" onClick={()=>setOpen(false)}>تواصل معنا</a>
    </nav>
    <div className="nav-actions"><button className="icon-btn" aria-label="تغيير المظهر" onClick={()=>setDark(v=>!v)}>{dark?<Sun size={19}/>:<Moon size={19}/>}</button><Link className="nav-cta" to="/blog">استكشف المقالات <ArrowLeft size={16}/></Link><button className="icon-btn mobile-menu" onClick={()=>setOpen(v=>!v)} aria-label="القائمة">{open?<X/>:<Menu/>}</button></div>
  </div></header>;
}
function Footer(){return <footer className="footer" id="contact"><div className="container footer-grid"><div><Link to="/" className="brand"><span className="brand-icon"><Camera size={23}/></span><span>عدسة<span className="brand-dot">.</span><small>عالم من الإبداع البصري</small></span></Link><p>نشاركك الشغف بالصورة، ونلهمك لتكتشف العالم من زاوية مختلفة.</p><div className="socials"><a href="#contact"><Instagram/></a><a href="#contact"><Facebook/></a><a href="#contact"><Twitter/></a></div></div><div><h4>روابط سريعة</h4><Link to="/">الرئيسية</Link><Link to="/blog">المدونة</Link><a href="/#about">من نحن</a></div><div><h4>استكشف التصنيفات</h4>{['إضاءة','بورتريه','تقنيات','معدات','مناظر طبيعية'].map(c=><Link key={c} to={`/blog?category=${encodeURIComponent(c)}`}>{c}</Link>)}</div><div><h4>ابقَ على اطلاع</h4><p>تابع أحدث المقالات والنصائح في عالم التصوير.</p><Link className="footer-button" to="/blog">اكتشف المقالات <ArrowLeft size={16}/></Link></div></div><div className="container copyright"><span>© 2026 عدسة. جميع الحقوق محفوظة.</span><span>صُنع بشغف لعشاق التصوير <span className="brand-dot">♥</span></span></div></footer>}
export default function App(){return <><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/blog" element={<Blog/>}/><Route path="/blog/:slug" element={<Details/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>}
