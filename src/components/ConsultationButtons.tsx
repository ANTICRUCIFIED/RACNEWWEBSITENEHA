import React from 'react';
import { Calendar, Video, Mic } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.178 1.455 4.71 1.456 5.485 0 9.94-4.512 9.944-10.061a9.78 9.78 0 00-2.92-7.047 9.873 9.873 0 00-7.026-2.924C5.459 2.58 1.006 7.093 1.002 12.64c-.001 1.62.43 3.202 1.25 4.616l-.993 3.625 3.71-.973zm11.218-6.855c-.301-.15-1.785-.88-2.062-.98-.277-.1-.478-.15-.678.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.651.075-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.496-1.78-1.672-2.08-.176-.3-.019-.462.13-.61.137-.133.301-.352.451-.527.15-.176.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.633-.93-2.242-.244-.588-.492-.51-.678-.519-.175-.009-.375-.01-.576-.01-.2 0-.526.075-.801.375-.276.3-1.052 1.03-1.052 2.516s1.078 2.917 1.229 3.117c.15.2 2.122 3.24 5.141 4.545.717.31 1.277.496 1.713.635.721.23 1.378.197 1.9.119.58-.087 1.785-.73 2.037-1.434.252-.703.252-1.306.176-1.431-.076-.125-.276-.2-.577-.35z" />
  </svg>
);

interface ConsultationButtonsProps {
  className?: string;
  variant?: 'grid' | 'stack' | 'compact';
}

export default function ConsultationButtons({ className = '', variant = 'grid' }: ConsultationButtonsProps) {
  const actions = [
    {
      title: "Chat with RAAHI",
      description: "Get instant advice on WhatsApp",
      link: "https://wa.me/916239699077?text=Hi%20RAAAHI",
      icon: WhatsAppIcon,
      color: "bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[#25D366]/20",
      textColor: "text-[#128C7E]",
      borderColor: "border-[#25D366]/25",
      bgColor: "bg-[#25D366]/5",
    },
    {
      title: "15-Min Free Call",
      description: "Schedule a basic overview call",
      link: "https://cal.id/rac-forge/15-minutes-free-call",
      icon: Calendar,
      color: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50/50",
    },
    {
      title: "30-Min Paid Session",
      description: "In-depth clinical & QMS strategy",
      link: "https://cal.id/rac-forge/30-minutes-paid-call",
      icon: Video,
      color: "bg-brand-deep hover:bg-slate-800 text-white shadow-brand-deep/20",
      textColor: "text-brand-deep",
      borderColor: "border-slate-200",
      bgColor: "bg-slate-50",
    },
    {
      title: "Talk to RAAAHI",
      description: "Interactive voice AI advisor",
      link: "/voice.html",
      icon: Mic,
      color: "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/20",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50/50",
      isLocal: true,
    }
  ];

  if (variant === 'stack') {
    return (
      <div className={`space-y-4 ${className}`}>
        {actions.map((act) => (
          <a
            key={act.title}
            href={act.link}
            target={act.isLocal ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`flex items-center p-4 border rounded-2xl hover:shadow-lg transition-all duration-300 ${act.borderColor} ${act.bgColor} group`}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 shrink-0 transition-transform group-hover:scale-110 ${act.color}`}>
              <act.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-bold text-brand-deep text-base group-hover:text-brand-teal transition-colors">
                {act.title}
              </h4>
              <p className="text-gray-500 text-xs">
                {act.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap gap-3 ${className}`}>
        {actions.map((act) => (
          <a
            key={act.title}
            href={act.link}
            target={act.isLocal ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`flex items-center px-4 py-3 border rounded-xl hover:shadow-md transition-all duration-300 text-xs font-bold ${act.borderColor} ${act.bgColor} hover:bg-white`}
          >
            <act.icon className={`w-4 h-4 mr-2 ${act.textColor}`} />
            <span className="text-brand-deep font-bold">{act.title}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${className}`}>
      {actions.map((act) => (
        <a
          key={act.title}
          href={act.link}
          target={act.isLocal ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="flex flex-col justify-between p-6 bg-white border border-gray-100 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group shadow-lg"
        >
          <div>
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${act.color}`}>
              <act.icon className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-brand-deep text-lg mb-1 group-hover:text-brand-teal transition-colors">
              {act.title}
            </h4>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {act.description}
            </p>
          </div>
          <span className={`inline-flex items-center text-xs font-bold uppercase tracking-widest ${act.textColor}`}>
            Get Started &rarr;
          </span>
        </a>
      ))}
    </div>
  );
}
