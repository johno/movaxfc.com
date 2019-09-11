require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-mdx',
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `app0iO65Cw1jloXkG`,
            tableName: `d1`,
            tableLinks: ['location']
          },
          {
            baseId: `app0iO65Cw1jloXkG`,
            tableName: `30s`,
            tableLinks: ['location']
          },
          {
            baseId: `app0iO65Cw1jloXkG`,
            tableName: `40s`,
            tableLinks: ['location']
          },
          {
            baseId: `app0iO65Cw1jloXkG`,
            tableName: `location`
          }
        ]
      }
    }
  ]
}