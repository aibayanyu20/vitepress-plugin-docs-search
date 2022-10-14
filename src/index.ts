import type { PluginOption, ResolvedConfig } from 'vite'
import type { MarkdownRenderer } from 'vitepress'
import { createMarkdownRenderer } from 'vitepress'
import { mdParser } from './parser/md-parser'
import type { UserOptions } from './typing'

const DocsSearch = (_options?: UserOptions): PluginOption => {
  let config: ResolvedConfig
  let renderer: MarkdownRenderer
  return {
    name: 'vitepress-plugin-docs-search',
    async configResolved(_config) {
      config = _config
      renderer = await createMarkdownRenderer(config.root, {}, config.base ?? '/')
    },
    async transform(code, id) {
      if (id.endsWith('.md')) {
        const env = {}
        const html = renderer.render(code, env)
        const md = await mdParser(html)
        console.log(env)
      }
    },
  }
}

export { DocsSearch }

export default DocsSearch
