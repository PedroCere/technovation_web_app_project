if (typeof globalThis.crypto === 'undefined') {
  globalThis.crypto = {};
}
if (typeof globalThis.crypto.getRandomValues !== 'function') {
  globalThis.crypto.getRandomValues = (arr) => {
    const crypto = require('crypto');
    const bytes = crypto.randomBytes(arr.length);
    arr.set(bytes);
    return arr;
  };
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    postcss: './postcss.config.cjs'
  }
})
