import { Link } from 'react-router-dom';
import { ArrowUpLeft, Clock3 } from 'lucide-react';
export default function PostCard({post, list=false}) { return <article className={`post-card ${list?'list-card':''}`}>
  <Link to={`/blog/${post.slug}`} className="post-image"><img src={post.image} alt={post.title} loading="lazy"/><span className="category-pill">{post.category}</span></Link>
  <div className="post-info"><div className="post-meta"><span>{new Date(post.date).toLocaleDateString('ar-EG',{year:'numeric',month:'long',day:'numeric'})}</span><i/> <span><Clock3 size={14}/> {post.readTime}</span></div>
  <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><div className="post-bottom"><div className="author"><img src={post.author?.avatar} alt=""/><span><b>{post.author?.name}</b><small>{post.author?.role}</small></span></div><Link className="read-link" to={`/blog/${post.slug}`} aria-label="اقرأ المقال"><ArrowUpLeft size={20}/></Link></div></div>
</article> }
