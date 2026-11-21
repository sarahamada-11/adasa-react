import { useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, LayoutGrid, List, ChevronRight, ChevronLeft, SlidersHorizontal, X } from 'lucide-react';
import { posts, categories } from '../data.js';
import PostCard from '../components/PostCard';
export default function Blog(){
 const [params,setParams]=useSearchParams(); const initial=params.get('category')||'الكل';
 const [category,setCategory]=useState(initial); const [query,setQuery]=useState(''); const [view,setView]=useState('grid'); const [page,setPage]=useState(1); const perPage=6;
 const filtered=useMemo(()=>posts.filter(p=>(category==='الكل'||p.category===category)&&(`${p.title} ${p.excerpt} ${p.tags?.join(' ')}`.toLowerCase().includes(query.toLowerCase()))),[category,query]);
 const pages=Math.max(1,Math.ceil(filtered.length/perPage)); const visible=filtered.slice((page-1)*perPage,page*perPage);
 function choose(c){setCategory(c);setPage(1);setParams(c==='الكل'?{}:{category:c});}
 return <><section className="page-hero"><div className="container"><div className="breadcrumbs"><Link to="/">الرئيسية</Link><ChevronLeft size={15}/><span>المدونة</span></div><span className="eyebrow">مساحة للإلهام والمعرفة</span><h1>مدونة <em>عدسة</em></h1><p>اكتشف مقالات ملهمة ونصائح عملية ترتقي بشغفك بالتصوير إلى مستوى جديد.</p><div className="blog-count"><b>{posts.length}+</b> مقال في عالم التصوير</div></div></section>
 <section className="section blog-section"><div className="container"><div className="blog-toolbar"><div className="search-box"><Search size={19}/><input value={query} onChange={e=>{setQuery(e.target.value);setPage(1)}} placeholder="ابحث عن مقال أو موضوع..."/>{query&&<button onClick={()=>setQuery('')}><X size={16}/></button>}</div><div className="view-toggle"><button className={view==='grid'?'active':''} onClick={()=>setView('grid')} aria-label="شبكة"><LayoutGrid size={18}/></button><button className={view==='list'?'active':''} onClick={()=>setView('list')} aria-label="قائمة"><List size={18}/></button></div></div>
 <div className="category-row"><span><SlidersHorizontal size={16}/> التصنيفات:</span><button className={category==='الكل'?'selected':''} onClick={()=>choose('الكل')}>الكل <small>{posts.length}</small></button>{categories.filter(c=>c!=='الكل').map(c=><button key={c} className={category===c?'selected':''} onClick={()=>choose(c)}>{c}<small>{posts.filter(p=>p.category===c).length}</small></button>)}</div>
 <div className="results-line"><span>عرض <b>{filtered.length?((page-1)*perPage+1):0}-{Math.min(page*perPage,filtered.length)}</b> من <b>{filtered.length}</b> مقال</span>{category!=='الكل'&&<button onClick={()=>choose('الكل')}>مسح الفلتر <X size={14}/></button>}</div>
 {visible.length?<div className={view==='grid'?'posts-grid':'posts-list'}>{visible.map(p=><PostCard key={p.id} post={p} list={view==='list'}/>)}</div>:<div className="empty-state"><Search size={34}/><h3>لا توجد نتائج</h3><p>جرّب البحث بكلمات مختلفة أو اختر تصنيفاً آخر.</p><button className="primary-btn" onClick={()=>{setQuery('');choose('الكل')}}>عرض كل المقالات</button></div>}
 {filtered.length>perPage&&<div className="pagination"><button disabled={page===1} onClick={()=>setPage(p=>p-1)}><ChevronRight size={18}/> السابق</button>{Array.from({length:pages},(_,i)=>i+1).map(n=><button key={n} className={page===n?'current':''} onClick={()=>setPage(n)}>{n}</button>)}<button disabled={page===pages} onClick={()=>setPage(p=>p+1)}>التالي <ChevronLeft size={18}/></button></div>}
 </div></section></>}
