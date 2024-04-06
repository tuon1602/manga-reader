import { MetadataRoute } from 'next'
import { CURRENT_DOMAIN } from '@/constants'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow:'/chapter'
    },
    sitemap: `${CURRENT_DOMAIN}/sitemap.xml`,
  }
}