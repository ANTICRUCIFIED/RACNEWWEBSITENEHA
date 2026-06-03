import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag as TagIcon, Share2, Facebook, Twitter, Linkedin, MessageSquare, Send, CornerDownRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogData';
import { db, auth } from '../lib/firebase';
import { 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: any;
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

interface CommentData {
  id: string;
  author: string;
  role: string;
  text: string;
  createdAt: any;
  replies?: ReplyData[];
}

interface ReplyData {
  id: string;
  author: string;
  text: string;
  createdAt: any;
  isStaff?: boolean;
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<CommentData[]>([]);
  const [replyText, setReplyText] = useState<{ [key: string]: string }>({});
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    const staticPost = BLOG_POSTS.find(p => p.id === id);
    if (staticPost) {
      setPost(staticPost);
      setIsLoading(false);
    } else {
      fetch(`https://racnewwebsiteneha.vercel.app/api/posts/${id}`)
        .then(res => {
          if (!res.ok) throw new Error('Article target not found');
          return res.json();
        })
        .then(data => {
          if (data && data.title) {
            setPost(data);
          }
          setIsLoading(false);
        })
        .catch(err => {
          console.warn('Target blog post read failure:', err);
          setIsLoading(false);
        });
    }

    const q = query(
      collection(db, 'blog_comments'),
      where('postId', '==', id),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedComments = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        replies: []
      } as CommentData));
      
      setComments(fetchedComments);

      // Fetch replies for each comment
      snapshot.docs.forEach(commentDoc => {
        const repliesQ = query(
          collection(db, `blog_comments/${commentDoc.id}/replies`),
          orderBy('createdAt', 'asc')
        );

        onSnapshot(repliesQ, (replySnapshot) => {
          const replies = replySnapshot.docs.map(rd => ({
            id: rd.id,
            ...rd.data()
          } as ReplyData));
          
          setComments(prev => prev.map(c => 
            c.id === commentDoc.id ? { ...c, replies } : c
          ));
        }, (error) => handleFirestoreError(error, OperationType.LIST, `blog_comments/${commentDoc.id}/replies`));
      });
    }, (error) => handleFirestoreError(error, OperationType.LIST, 'blog_comments'));

    return () => unsubscribe();
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-32 pb-20 text-center flex flex-col items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-brand-teal mb-4"></div>
        <p className="text-gray-500 font-medium">Retrieving article content...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-brand-deep">Article Not Found</h1>
        <Link to="/blogs/resources" className="text-brand-teal hover:underline mt-4 inline-block">Back to Blogs</Link>
      </div>
    );
  }

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim() || !id) return;

    try {
      await addDoc(collection(db, 'blog_comments'), {
        postId: id,
        author: 'Guest Professional',
        role: 'Market Participant',
        text: commentText,
        createdAt: serverTimestamp(),
        isStaff: false
      });
      setCommentText('');
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'blog_comments');
    }
  };

  const handleReplySubmit = async (commentId: string) => {
    const text = replyText[commentId];
    if (!text?.trim()) return;

    try {
      await addDoc(collection(db, `blog_comments/${commentId}/replies`), {
        author: 'Guest Professional',
        text,
        createdAt: serverTimestamp(),
        isStaff: false
      });
      setReplyText(prev => ({ ...prev, [commentId]: '' }));
      setActiveReplyId(null);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, `blog_comments/${commentId}/replies`);
    }
  };

  const formatDate = (date: any) => {
    if (!date) return 'Just now';
    const d = date instanceof Timestamp ? date.toDate() : new Date(date);
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const recentPosts = BLOG_POSTS.filter(p => p.id !== id).slice(0, 3);
  const relatedPosts = BLOG_POSTS.filter(p => 
    p.id !== id && p.tags.some(t => post.tags.includes(t))
  ).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title={post.title} 
        description={post.excerpt} 
        keywords={`${post.tags.join(', ')}, ${post.category}, medical device regulations, USFDA, CDSCO, EU MDR`}
        canonical={`/blogs/${id}`}
        type="article"
        datePublished={post.date ? new Date(post.date).toISOString().split('T')[0] : undefined}
        authorName={post.author}
      />

      {/* Post Header */}
      <section className="pt-32 pb-20 bg-brand-deep text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blogs/resources" className="inline-flex items-center text-brand-teal font-bold mb-8 hover:translate-x-[-4px] transition-transform group">
            <ArrowLeft className="mr-2 group-hover:scale-110" size={20} /> Back to Blogs
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-brand-teal text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center text-white/50 text-sm font-bold uppercase tracking-widest border-l border-white/20 pl-4">
                <Calendar className="mr-2 w-4 h-4 text-brand-teal" /> {post.date}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg border border-white/20">
                RF
              </div>
              <div>
                <div className="font-bold text-white">{post.author}</div>
                <div className="text-sm text-white/50 font-medium">Regulatory Consultants</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Content Area */}
            <div className="lg:col-span-8">
              <div className="rounded-[3rem] overflow-hidden mb-12 shadow-2xl border border-gray-100 aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <article className="markdown-body prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-brand-teal mb-12 italic text-lg text-brand-deep font-medium">
                  {post.excerpt}
                </div>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </article>

              {/* Tags Section */}
              <div className="mt-16 pt-10 border-t border-gray-100">
                <div className="flex items-center text-brand-deep font-bold mb-6">
                  <TagIcon size={20} className="mr-3 text-brand-teal" /> Article Tags
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link 
                      key={tag} 
                      to={`/blogs/resources?tag=${tag}`}
                      className="bg-gray-50 text-gray-600 px-5 py-2 rounded-full text-sm font-bold border border-gray-100 hover:border-brand-teal hover:text-brand-teal transition-all"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-20 pt-16 border-t border-gray-100">
                <h3 className="text-3xl font-black text-brand-deep mb-10 flex items-center">
                  <MessageSquare size={28} className="mr-4 text-brand-teal" /> 
                  Comments ({comments.length + comments.reduce((acc, curr) => acc + (curr.replies?.length || 0), 0)})
                </h3>

                {/* Comment Form */}
                <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 mb-12">
                  <h4 className="text-xl font-bold text-brand-deep mb-6">Leave a Comment</h4>
                  <form onSubmit={handleCommentSubmit} className="space-y-4">
                    <textarea 
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Share your thoughts or ask a regulatory question..."
                      className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none h-32 resize-none transition-all"
                    />
                    <div className="flex justify-end">
                      <button type="submit" className="bg-brand-teal text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-deep transition-all flex items-center shadow-lg shadow-brand-teal/20">
                        Post Comment <Send size={18} className="ml-2" />
                      </button>
                    </div>
                  </form>
                </div>

                {/* Comment List */}
                <div className="space-y-10">
                  {comments.map((c) => (
                    <div key={c.id} className="space-y-6">
                      <div className="flex space-x-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center font-bold text-gray-500 shrink-0 capitalize">
                          {c.author[0]}
                        </div>
                        <div className="flex-1 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="font-bold text-brand-deep">{c.author}</div>
                              <div className="text-xs text-gray-400">{c.role}</div>
                            </div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">{formatDate(c.createdAt)}</div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{c.text}</p>
                          <button 
                            onClick={() => setActiveReplyId(activeReplyId === c.id ? null : c.id)}
                            className="mt-4 text-xs font-black text-brand-teal uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center"
                          >
                            Reply
                          </button>

                          {/* Reply Box */}
                          {activeReplyId === c.id && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="mt-6 pt-6 border-t border-gray-100"
                            >
                              <div className="flex space-x-3">
                                <input 
                                  type="text" 
                                  value={replyText[c.id] || ''}
                                  onChange={(e) => setReplyText(prev => ({ ...prev, [c.id]: e.target.value }))}
                                  placeholder="Write a reply..."
                                  className="flex-1 px-4 py-2 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-brand-teal transition-all text-sm"
                                  onKeyDown={(e) => e.key === 'Enter' && handleReplySubmit(c.id)}
                                />
                                <button 
                                  onClick={() => handleReplySubmit(c.id)}
                                  className="bg-brand-teal text-white p-2 rounded-xl hover:bg-brand-deep transition-all"
                                >
                                  <Send size={18} />
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </div>
                      
                      {/* Replies */}
                      {c.replies?.map((r) => (
                        <div key={r.id} className="flex space-x-4 pl-12">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 ${r.isStaff ? 'bg-brand-deep text-white' : 'bg-gray-100 text-gray-400'}`}>
                            {r.isStaff ? 'RF' : r.author[0]}
                          </div>
                          <div className={`flex-1 p-6 rounded-2xl border ${r.isStaff ? 'bg-brand-teal/5 border-brand-teal/10' : 'bg-gray-50 border-gray-100'}`}>
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center">
                                <CornerDownRight size={14} className="mr-2 text-brand-teal" />
                                <div className="font-bold text-brand-deep">
                                  {r.author} 
                                  {r.isStaff && <span className="text-[10px] bg-brand-teal text-white px-2 py-0.5 rounded-full ml-2 uppercase">Team</span>}
                                </div>
                              </div>
                              <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">{formatDate(r.createdAt)}</div>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm">{r.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-10">
                
                {/* Social Share */}
                <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                  <h4 className="text-lg font-bold text-brand-deep mb-6 uppercase tracking-widest">Share Article</h4>
                  <div className="grid grid-cols-4 gap-3">
                    <button className="h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#1877F2] hover:text-white border border-gray-200 transition-all">
                      <Facebook size={20} />
                    </button>
                    <button className="h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white border border-gray-200 transition-all">
                      <Twitter size={20} />
                    </button>
                    <button className="h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#0077B5] hover:text-white border border-gray-200 transition-all">
                      <Linkedin size={20} />
                    </button>
                    <button className="h-12 bg-white rounded-xl flex items-center justify-center hover:bg-brand-teal hover:text-white border border-gray-200 transition-all">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
                  <h4 className="text-lg font-bold text-brand-deep mb-8 uppercase tracking-widest flex items-center">
                    <Calendar size={18} className="mr-2 text-brand-teal" /> Recent Posts
                  </h4>
                  <div className="space-y-8">
                    {recentPosts.map(rp => (
                      <Link key={rp.id} to={`/blogs/${rp.id}`} className="flex group">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-gray-200 shadow-sm">
                          <img 
                            src={rp.image} 
                            alt={rp.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="ml-4 flex flex-col justify-center">
                          <div className="text-[10px] font-black text-brand-teal uppercase tracking-widest mb-1">{rp.date}</div>
                          <h5 className="text-sm font-bold text-brand-deep leading-tight group-hover:text-brand-teal transition-colors line-clamp-2">
                            {rp.title}
                          </h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories / Tags Quick Link */}
                <div className="bg-brand-teal/5 p-8 rounded-[2.5rem] border border-brand-teal/10">
                  <h4 className="text-lg font-bold text-brand-deep mb-6 uppercase tracking-widest">Industry Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Regulatory', 'CDSCO', 'USFDA', 'EU MDR', 'Compliance', 'Quality'].map(topic => (
                      <Link 
                        key={topic} 
                        to={`/blogs/resources?tag=${topic}`}
                        className="text-xs bg-white text-brand-deep px-4 py-2 rounded-xl font-bold border border-gray-100 hover:border-brand-teal transition-all"
                      >
                        {topic}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Consultant CTA */}
                <div className="bg-brand-deep p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/10 skew-x-12 translate-x-1/4"></div>
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold mb-4 leading-tight">Expert Regulatory Advice</h4>
                    <p className="text-white/60 text-sm mb-8 leading-relaxed">
                      Need help with technical files or global submissions?
                    </p>
                    <Link to="/contact" className="block text-center bg-brand-teal text-white py-4 rounded-2xl font-bold hover:bg-white hover:text-brand-deep transition-all shadow-lg shadow-brand-teal/20">
                      Book a Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Bottom */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-brand-deep mb-12 flex items-center">
              <span className="w-12 h-1 bg-brand-teal mr-6 hidden md:block"></span>
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {relatedPosts.map(rp => (
                <Link key={rp.id} to={`/blogs/${rp.id}`} className="group bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all">
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                    <img 
                      src={rp.image} 
                      alt={rp.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center space-x-3 text-[10px] font-black text-brand-teal uppercase tracking-widest mb-3">
                    <Calendar size={12} /> {rp.date}
                  </div>
                  <h3 className="text-lg font-bold text-brand-deep leading-tight group-hover:text-brand-teal transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
