import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5000,
    // allow Replit preview hosts
    allowedHosts: true, 
    // If you prefer to be explicit, use this instead of the line above:
    // allowedHosts: ['5415cce8-f1be-4dda-a5b9-9b10d5fe8f62-00-1hia6dgod3jtg.worf.replit.dev'],
  },
  preview: {
    host: true,
    port: 5000,
    allowedHosts: true,
    // or the explicit array as above
  },
})
