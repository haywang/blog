const BASE_PATH = process.env.BASE_PATH || ''

const siteMeta = {
  title: "Austin's Blog",
  description:
    "This is Austin's blog, share frontend development|career|personal ideas",
  siteUrl: 'https://www.austinfe.com',
  socialBanner: `${BASE_PATH}/static/images/twitter-card.png`,
  headerTitle: "Austin's Blog",
  author: 'Austin',
  theme: 'system',
  email: 'base64decode:YXV0aW5mZUBwcm90b24ubWU=',
  github: 'https://github.com/haywang',
  x: 'https://x.com/haywang2',
  facebook: '',
  youtube: '',
  linkedin: '',
  language: 'en-us',
  locale: 'en-US',
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO, // debug the giscus comment
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en'
    }
  },
  analytics: {
    googleAnalytics: {
      googleAnalyticsId: 'G-CM8LEM9N6W' // e.g. G-XXXXXXX
    }
  }
}

module.exports = siteMeta
