import path from 'path'
import fs from 'fs/promises'
import { load } from 'cheerio'
// @ts-expect-error no types
import lunr from '../lunr.esm'
export const mdParser = async(html: string) => {
  const $ = load(html)
  console.log($)
}
