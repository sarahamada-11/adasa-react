import { Link } from 'react-router-dom';
import { Camera, ArrowLeft } from 'lucide-react';
export default function NotFound(){return <section className="not-found"><div className="container"><Camera size={46}/><strong>404</strong><h1>يبدو أنك خرجت من إطار الصورة!</h1><p>الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.</p><Link to="/" className="primary-btn">العودة للرئيسية <ArrowLeft size={18}/></Link></div></section>}
