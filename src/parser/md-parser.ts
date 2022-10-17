import { load } from 'cheerio'
export const mdParser = async(html: string, env: Record<string, any>) => {
  const $ = load(html)
  // console.log($('.header-anchor').find('h'))
}
