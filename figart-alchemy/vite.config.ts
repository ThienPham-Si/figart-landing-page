import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'
import * as fs from 'node:fs'

// Get all HTML files in the root directory
const htmlFiles: string[] = fs.readdirSync('.').filter((file: string) => file.endsWith('.html'))
const input: Record<string, string> = {}
htmlFiles.forEach((file: string) => {
  input[file.replace('.html', '')] = path.resolve(process.cwd(), file)
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input
    }
  }
})
