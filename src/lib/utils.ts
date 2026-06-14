import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getApiBaseUrl(): string {
  // 1. Prioritize URL parameter query override (?api=...)
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const apiUrl = urlParams.get('api');
    if (apiUrl) {
      if (!apiUrl.startsWith('http')) {
        return `https://${apiUrl}`;
      }
      return apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;
    }
  }

  // 2. Fall back to explicit VITE_API_BASE_URL environment variable if set by user during build
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl !== 'undefined' && envUrl !== 'null' && envUrl.trim() !== '') {
    if (!envUrl.startsWith('http')) {
      return `https://${envUrl}`;
    }
    return envUrl.endsWith('/') ? envUrl.slice(0, -1) : envUrl;
  }

  // 3. If running in a local development preview or sandbox environment, route calls relatively
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (
      hostname.includes('run.app') || 
      hostname.includes('localhost') || 
      hostname.includes('127.0.0.1') || 
      hostname.includes('gitpod') || 
      hostname.includes('github.dev') ||
      hostname.includes('github.preview.app') ||
      hostname.includes('googleusercontent') ||
      hostname.includes('aistudio.google')
    ) {
      return '';
    }
    
    // If visiting the Production API's root domain itself, route relativamente
    if (hostname === 'racnewwebsiteneha.vercel.app') {
      return '';
    }
  }

  // 4. Fallback default for any static hosting deployment (like GitHub Pages on racforge.com or *.github.io)
  // This directs API routing dynamically to the Vercel-managed full-stack server
  return 'https://racnewwebsiteneha.vercel.app';
}
