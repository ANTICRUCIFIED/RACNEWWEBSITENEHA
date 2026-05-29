import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';
import { INFO_DATA } from '../../data/infoData';

export default function InfoDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? INFO_DATA[slug.toLowerCase()] : null;

  if (!data) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-brand-deep">Information Not Found</h1>
        <Link to="/" className="text-brand-teal hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <SEO 
        title={data.title} 
        description={data.content.substring(0, 160)} 
        keywords={`${data.title}, medical device regulation, regulatory compliance, ${data.title} expert, CDSCO, USFDA`}
        canonical={`/information/${slug.toLowerCase()}`}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-brand-teal font-bold mb-8 hover:translate-x-[-4px] transition-transform">
          <ArrowLeft className="mr-2" size={20} /> Back to Home
        </Link>
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
          <h1 className="text-4xl font-extrabold text-brand-deep mb-8">{data.title}</h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>{data.content}</p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-brand-deep mb-4">Need Regulatory Assistance?</h3>
            <p className="text-gray-600 mb-6">Our experts at RAC Forge can help you navigate the complexities of {data.title} and other regulatory requirements.</p>
            <Link to="/contact" className="inline-block bg-brand-deep text-white px-8 py-3 rounded-full font-bold hover:bg-brand-teal transition-colors">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
