import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react'; 

export default defineConfig({ 
    test: {
    globals: true, // <-- This enables global `test`, `expect`, etc.
    environment: 'jsdom', //used for tesing library
  },
    plugins: [react()] 
});