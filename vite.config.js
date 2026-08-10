import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { exec } from 'child_process';

function pythonEmailApiPlugin() {
  return {
    name: 'python-email-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/send-email', (req, res, next) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const pyProc = exec('python api/send-email.py', { cwd: __dirname }, (error, stdout, stderr) => {
                if (error && !stdout) {
                  console.error('Email API Error:', error, stderr);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.setHeader('Access-Control-Allow-Origin', '*');
                  res.end(JSON.stringify({ success: false, error: stderr || error.message }));
                } else {
                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.setHeader('Access-Control-Allow-Origin', '*');
                  res.end(stdout.trim() || JSON.stringify({ success: true, message: 'Email sent successfully!' }));
                }
              });
              pyProc.stdin.write(body);
              pyProc.stdin.end();
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('Access-Control-Allow-Origin', '*');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
        } else if (req.method === 'OPTIONS') {
          res.statusCode = 200;
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.end();
        } else {
          next();
        }
      });
    }
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), pythonEmailApiPlugin()],
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

