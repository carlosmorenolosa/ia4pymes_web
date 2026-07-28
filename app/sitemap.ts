import { MetadataRoute } from 'next'
import { getAllPosts, getEnPosts } from '@/lib/blog-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ia4pymes.tech'
    const posts = getAllPosts()
    const enPosts = getEnPosts()

    const blogUrls = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const enBlogUrls = enPosts.map((post) => ({
        url: `${baseUrl}/en/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const sectors = ['clinicas', 'abogados', 'gestorias']
    const cities = ['madrid', 'barcelona', 'valencia']

    const sectorUrls = sectors.flatMap((sector) =>
        cities.map((city) => ({
            url: `${baseUrl}/sectores/${sector}/${city}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }))
    )

    const latestDate = posts.length > 0 
        ? new Date(posts.reduce((latest, post) => new Date(post.date) > new Date(latest.date) ? post : latest).date) 
        : new Date()

    return [
        {
            url: baseUrl,
            lastModified: latestDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/en`,
            lastModified: latestDate,
            changeFrequency: 'weekly',
            priority: 0.95,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: latestDate,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/en/blog`,
            lastModified: latestDate,
            changeFrequency: 'daily',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/sectores`,
            lastModified: latestDate,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        ...blogUrls,
        ...enBlogUrls,
        ...sectorUrls,
    ]
}
