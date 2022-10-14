import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import { DocsSearch } from '../src'
export default defineConfig({
  plugins: [
    DocsSearch(),
    Inspect(),
  ],
})
