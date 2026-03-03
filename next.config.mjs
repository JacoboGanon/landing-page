import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import createNextIntlPlugin from 'next-intl/plugin'
import remarkGfm from 'remark-gfm'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withNextIntl(withMDX(nextConfig))
