import React, { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BookOpen, User, Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  language: 'hi' | 'en';
}

export default function BlogSection({ language }: BlogSectionProps) {
  const isEn = language === 'en';
  const [selectedPost, setSelectedPost] = useState<any>(null);

  return (
    <section id="blog" className="py-10 md:py-16 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
            {isEn ? 'HEALTH ARTICLES & SCHEMES' : 'स्वास्थ्य ब्लॉग एवं लेख'}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            {isEn ? 'Sun City Medical Portal Articles' : 'सन सिटी मेडिकल जर्नल एवं योजना गाइड'}
          </h2>
          <p className="text-slate-500 text-xs md:text-sm">
            {isEn 
              ? 'Read preventative guidelines from our senior doctors, and detailed walk-throughs of government healthcare programs.'
              : 'हमारे वरिष्ठ डॉक्टरों से निवारक दिशानिर्देश और सरकारी स्वास्थ्य योजनाओं का लाभ उठाने की विस्तृत जानकारी पढ़ें।'}
          </p>
        </div>

        {/* Blog layout */}
        {selectedPost ? (
          /* Full post reading view */
          <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-10 max-w-3xl mx-auto space-y-6 animate-fadeIn" id="full-blog-post-view">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
            >
              ← {isEn ? 'Back to all articles' : 'सभी लेखों पर वापस जाएं'}
            </button>

            <div className="space-y-4">
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                {selectedPost.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight">
                {isEn ? selectedPost.title : selectedPost.titleHindi}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1"><User className="h-3.5 w-3.5" /> {selectedPost.author}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {selectedPost.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {selectedPost.readTime}</span>
              </div>
            </div>

            {/* Content body with proper paragraph rendering */}
            <div className="text-slate-600 text-sm leading-relaxed space-y-4 whitespace-pre-line border-t border-slate-100 pt-6">
              {selectedPost.content}
            </div>

            <div className="pt-6 border-t border-slate-150 flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-50/50 p-4 rounded-2xl">
              <div>
                <p className="font-extrabold text-xs text-slate-800">{isEn ? 'Have symptoms regarding this article?' : 'क्या आपको इस विषय से संबंधित कोई लक्षण हैं?'}</p>
                <p className="text-[11px] text-slate-500">{isEn ? 'Consult with our specialist immediately.' : 'तुरंत हमारे विशेषज्ञ से सलाह लें।'}</p>
              </div>
              <button
                onClick={() => {
                  setSelectedPost(null);
                  const bookingSection = document.getElementById('nav-booking');
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    const el = document.getElementById('booking');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition shrink-0"
              >
                {isEn ? 'Book Consultation' : 'अपॉइंटमेंट बुक करें'}
              </button>
            </div>
          </div>
        ) : (
          /* Cards listing grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                id={`blog-card-${post.id}`}
              >
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">{post.readTime}</span>
                  </div>

                  <h3 className="font-bold text-base text-slate-800 line-clamp-2 leading-tight">
                    {isEn ? post.title : post.titleHindi}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {isEn ? post.summary : post.summaryHindi}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-slate-50/60 flex justify-between items-center">
                  <span className="text-[11px] text-slate-400 font-medium">{post.date}</span>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <span>{isEn ? 'Read Article' : 'पूरा लेख पढ़ें'}</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
