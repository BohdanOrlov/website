module.exports = {
    siteMetadata: {
        title: `Bohdan Orlov`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
            name: `src`,
            path: `${__dirname}/src/`,
            }
        },
        `gatsby-transformer-remark`
    ]
}