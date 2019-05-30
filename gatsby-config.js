module.exports = {
  siteMetadata: {
    title: `NameNewProject`,
    description: `Description of the new Project`,
    author: `Marcial Garcia`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography.js`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-eletrosil`,
        short_name: `eletrosil`,
        start_url: `/`,
        background_color: `#006582`,
        theme_color: `#006582`,
        display: `eletrosil-ui`,
        icon: `src/images/globals/favicon.ico`
      }
    }
  ]
};
