import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, User, ArrowRight, Tag as TagIcon, X, RefreshCw } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogData';
import { getApiBaseUrl } from '../lib/utils';

const API_BASE_URL = getApiBaseUrl();

export default function Resources() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get('tag');
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState(BLOG_POSTS);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshMessage, setRefreshMessage] = useState('');

  const refreshBlogs = () => {
    setIsRefreshing(true);
    setRefreshMessage('Syncing dynamic blogs...');
    
    // Retrieve and sync blogs
    fetch(`${API_BASE_URL}/api/posts`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to retrieve blog posts indexes');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const merged = [...data];
          BLOG_POSTS.forEach(staticPost => {
            if (!merged.some(p => p.id === staticPost.id)) {
              merged.push(staticPost);
            }
          });
          const parseDate = (dateStr: string) => {
            const parts = dateStr.split(' ');
            if (parts.length === 3) {
              const months: { [key: string]: number } = {
                Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
                Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
              };
              const day = parseInt(parts[0], 10);
              const month = months[parts[1]] || 0;
              const year = parseInt(parts[2], 10);
              return new Date(year, month, day).getTime();
            }
            return 0;
          };
          merged.sort((a, b) => parseDate(b.date) - parseDate(a.date));
          setPosts(merged);
          setRefreshMessage('Blogs successfully synchronized!');
          setTimeout(() => setRefreshMessage(''), 4500);
        }
      })
      .catch(err => {
        console.warn('Sync failed:', err);
        setRefreshMessage('Synchronized with local backups.');
        setTimeout(() => setRefreshMessage(''), 4500);
      })
      .finally(() => {
        setIsRefreshing(false);
      });
  };

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/posts`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to retrieve blog posts indexes');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          const merged = [...data];
          BLOG_POSTS.forEach(staticPost => {
            if (!merged.some(p => p.id === staticPost.id)) {
              merged.push(staticPost);
            }
          });
          const parseDate = (dateStr: string) => {
            const parts = dateStr.split(' ');
            if (parts.length === 3) {
              const months: { [key: string]: number } = {
                Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
                Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
              };
              const day = parseInt(parts[0], 10);
              const month = months[parts[1]] || 0;
              const year = parseInt(parts[2], 10);
              return new Date(year, month, day).getTime();
            }
            return 0;
          };
          merged.sort((a, b) => parseDate(b.date) - parseDate(a.date));
          setPosts(merged);
        }
      })
      .catch(err => {
        console.warn('Could not load dynamic posts, relying on static indices backup.', err);
      });
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesTag = !activeTag || post.tags.some(t => t.toLowerCase() === activeTag.toLowerCase());
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [posts, activeTag, searchQuery]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => post.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, [posts]);

  const handleTagClick = (tag: string | null) => {
    if (tag) {
      setSearchParams({ tag });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Medical Device Regulatory Blogs & Insights" 
        description="Latest insights on CDSCO, USFDA, and EU MDR compliance. Expert articles on 510k submission, sterilization validation, and biocompatibility testing."
        keywords="regulatory blogs, medical device insights, CDSCO news, USFDA 510k tips, EU MDR technical documentation articles, sterilization validation guide, medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant"
        canonical="/blogs/resources"
      />

      {/* Resources Hero */}
      <section className="relative h-[440px] flex items-center pt-32 lg:pt-40 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://anticrucified.github.io/MyWebP_Images/images/resources-banner.png"
            alt="RAC Forge Private Limited Blogs | RAC Forge Consulting" title="RAC Forge Private Limited Blogs"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
           loading="lazy" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            
          >
<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Blogs & Insights
          </h1>
</motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Expert perspectives on global medical device regulations and technical documentation.
          </motion.p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {activeTag && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-12 flex items-center space-x-4"
            >
              <span className="text-gray-500 font-bold uppercase tracking-widest flex items-center">
                <TagIcon size={16} className="mr-2" /> Showing Tag:
              </span>
              <span className="bg-brand-teal text-white px-6 py-2 rounded-full font-bold flex items-center">
                {activeTag}
                <button onClick={() => handleTagClick(null)} className="ml-3 hover:rotate-90 transition-transform">
                  <X size={16} />
                </button>
              </span>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              <AnimatePresence mode="popLayout">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, idx) => (
                    <motion.article
                      key={post.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group"
                    >
                      <Link to={`/blogs/${post.id}`} className="block">
                        <div className="relative h-[400px] rounded-[3rem] overflow-hidden mb-8 shadow-xl border border-gray-100">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-8 left-8 bg-brand-teal text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                            {post.category}
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-6 text-gray-500 text-sm font-bold uppercase tracking-widest">
                            <span className="flex items-center"><Calendar className="mr-2 w-4 h-4 text-brand-teal" /> {post.date}</span>
                            <span className="flex items-center"><User className="mr-2 w-4 h-4 text-brand-teal" /> {post.author}</span>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-deep group-hover:text-brand-teal transition-colors leading-tight">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 text-lg leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="pt-4 flex items-center text-brand-teal font-black text-lg uppercase tracking-widest">
                            Read Full Article <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-3 transition-transform" />
                          </div>
                        </div>
                      </Link>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {post.tags.slice(0, 4).map(tag => (
                          <button
                            key={tag}
                            onClick={(e) => {
                              e.preventDefault();
                              handleTagClick(tag);
                            }}
                            className="text-xs bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100 hover:border-brand-teal hover:text-brand-teal transition-all"
                          >
                            #{tag}
                          </button>
                        ))}
                      </div>
                    </motion.article>
                  ))
                ) : (
                  <div className="text-center py-20 bg-gray-50 rounded-[3rem]">
                    <h3 className="text-2xl font-bold text-brand-deep">No articles found</h3>
                    <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
                    <button 
                      onClick={() => { handleTagClick(null); setSearchQuery(''); }}
                      className="mt-6 text-brand-teal font-bold uppercase tracking-widest"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <aside className="space-y-12">
              {/* Search */}
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 font-bold">
                <h4 className="text-xl font-bold text-brand-deep mb-6">Search Blogs</h4>
                <div className="relative">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles..." 
                    className="w-full pl-6 pr-16 py-4 rounded-2xl border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all"
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center space-x-4">
                    <button 
                      onClick={refreshBlogs}
                      disabled={isRefreshing}
                      title="Refresh Blogs"
                      className={`text-gray-400 hover:text-brand-teal transition-all outline-none ${isRefreshing ? 'animate-spin text-brand-teal' : ''}`}
                    >
                      <RefreshCw size={20} />
                    </button>
                    <Search className="text-gray-400" size={20} />
                  </div>
                </div>
                {refreshMessage && (
                  <p className="text-xs text-brand-teal mt-3 font-semibold transition-all animate-pulse text-right pr-6">
                    {refreshMessage}
                  </p>
                )}
              </div>

              {/* Tags Cloud */}
              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h4 className="text-xl font-bold text-brand-deep mb-6">Popular Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {allTags.map((tag) => (
                    <button 
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                        activeTag === tag 
                          ? 'bg-brand-teal text-white' 
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-teal hover:text-brand-teal'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white p-10 rounded-[2.5rem] text-brand-deep relative overflow-hidden shadow-2xl border border-gray-100">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 skew-x-12 translate-x-1/4"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4 text-brand-deep">Stay Regulatory Ready</h4>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">
                    Join 500+ manufacturers receiving our monthly compliance digest.
                  </p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="Your work email" 
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-brand-deep placeholder:text-gray-400 focus:bg-white focus:border-brand-teal outline-none transition-all"
                    />
                    <button className="w-full bg-brand-deep text-white py-4 rounded-2xl font-bold hover:bg-brand-teal transition-all shadow-lg shadow-brand-deep/20">
                      Subscribe Now
                    </button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
