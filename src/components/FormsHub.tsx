import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, ChevronDown, ChevronUp, BookOpen, Layers } from 'lucide-react';
import { INFO_DATA } from '../data/infoData';
import InfoLink from './InfoLink';

interface FormsHubProps {
  keys: string[];
  title?: string;
}

export default function FormsHub({ keys, title = "Form Details & Regulatory Information" }: FormsHubProps) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const items = keys
    .map(key => ({
      key: key.toLowerCase(),
      data: INFO_DATA[key.toLowerCase()]
    }))
    .filter(item => item.data !== undefined);

  if (items.length === 0) return null;

  return (
    <div className="mt-16 bg-gradient-to-br from-slate-50 to-slate-100/50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-inner">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-brand-deep rounded-2xl text-white shadow-md">
          <Layers size={22} />
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-deep tracking-tight">{title}</h3>
          <p className="text-sm text-slate-500 font-medium">Click on any form or regulatory codex below to view its precise official specifications.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => {
          const isExpanded = expandedKey === item.key;
          return (
            <div 
              key={item.key}
              className="bg-white rounded-3xl border border-slate-150 shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all overflow-hidden flex flex-col justify-between"
              id={`form-hub-item-${item.key}`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-teal/10 rounded-xl text-brand-teal shrink-0">
                      <FileText size={20} />
                    </div>
                    <h4 className="font-extrabold text-brand-deep text-lg font-sans tracking-tight">
                      {item.data.title}
                    </h4>
                  </div>
                  <button 
                    onClick={() => setExpandedKey(isExpanded ? null : item.key)}
                    className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-brand-teal transition-colors"
                    aria-label={isExpanded ? "Collapse definition" : "Expand definition"}
                  >
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>

                <div className="mt-4 text-slate-600 text-sm leading-relaxed">
                  {isExpanded ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100"
                    >
                      <InfoLink text={item.data.content} />
                    </motion.div>
                  ) : (
                    <p className="line-clamp-2">
                      {item.data.content}
                    </p>
                  )}
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="font-mono text-slate-400">CODEX: {item.key.toUpperCase()}</span>
                <button 
                  onClick={() => setExpandedKey(isExpanded ? null : item.key)}
                  className="font-bold text-brand-teal hover:text-brand-deep flex items-center gap-1 transition-colors"
                >
                  <BookOpen size={12} />
                  {isExpanded ? 'Show Less' : 'Read Full Specs'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
