import type { Request, Response } from 'express';
import app from './index.js';

export default function handler(req: Request, res: Response) {
  if (req.url === '/' || req.url === '' || req.url.startsWith('/?')) {
    req.url = '/api/generate-image' + (req.url.startsWith('/?') ? req.url.slice(1) : '');
  }
  return app(req, res);
}
