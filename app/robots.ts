import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow:'/chapter'
    },
    sitemap: 'https://manga-reader-six.vercel.app/sitemap.xml',
  }
}