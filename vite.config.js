import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { exec } from 'child_process';
import { faqsData, locationData } from './functions/api/data.js';

function apiDevServerPlugin() {
  return {
    name: 'api-dev-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (!url.startsWith('/api')) {
          return next();
        }

        const corsHeaders = {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Cache-Control': 'no-cache'
        };

        if (req.method === 'OPTIONS') {
          res.writeHead(204, corsHeaders);
          res.end();
          return;
        }

        if (url === '/api/faqs') {
          res.writeHead(200, corsHeaders);
          res.end(JSON.stringify({ success: true, data: faqsData }));
          return;
        }

        if (url === '/api/location') {
          res.writeHead(200, corsHeaders);
          res.end(JSON.stringify({ success: true, data: locationData }));
          return;
        }

        if (url === '/api/site-content') {
          res.writeHead(200, corsHeaders);
          res.end(JSON.stringify({
            success: true,
            data: {
              faqs: faqsData,
              location: locationData
            }
          }));
          return;
        }

        if (url === '/api/pdf-data') {
          const fs = require('fs');
          const pdfPath = resolve(__dirname, 'join.pdf');
          if (fs.existsSync(pdfPath)) {
            const fileBuf = fs.readFileSync(pdfPath);
            res.writeHead(200, {
              'Content-Type': 'application/octet-stream',
              'Content-Length': fileBuf.length,
              'Access-Control-Allow-Origin': '*',
              'Cache-Control': 'public, max-age=3600'
            });
            res.end(fileBuf);
            return;
          }
        }

        if (url === '/api/send-email') {
          if (req.method === 'POST') {
            let bodyStr = '';
            req.on('data', (chunk) => {
              bodyStr += chunk.toString();
            });
            req.on('end', () => {
              try {
                const pyProc = exec('python api/send-email.py', { cwd: __dirname }, (error, stdout, stderr) => {
                  if (error && !stdout) {
                    console.error('Email API Error:', error, stderr);
                    res.writeHead(500, corsHeaders);
                    res.end(JSON.stringify({ success: false, error: stderr || error.message }));
                  } else {
                    res.writeHead(200, corsHeaders);
                    res.end(stdout.trim() || JSON.stringify({ success: true, message: 'Email sent successfully!' }));
                  }
                });

                pyProc.stdin.write(bodyStr);
                pyProc.stdin.end();
              } catch (err) {
                console.error('Vite Python email dispatch failed:', err);
                res.writeHead(500, corsHeaders);
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
            return;
          }
        }

        next();
      });
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), apiDevServerPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        execom: resolve(__dirname, 'execom.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        event: resolve(__dirname, 'event.html'),
        join: resolve(__dirname, 'join.html')
      }
    }
  }
});
