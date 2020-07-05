/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
//
const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if(node.internal.type === 'YoutubeVideo') {
    const slug = node.title.toLowerCase().replace(/[^a-z0-9] -/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/\'+/g, '') // collapse whitespace and replace by -
        .replace(/\`+/g, '') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
    createNodeField({
      node,
      name: `slug`,
      value: encodeURI(slug)
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
		query {
			allYoutubeVideo {
				edges {
					node {
            id
						title
						videoId
						publishedAt
						description
						thumbnail {
							height
							url
							width
						}
            fields {
              slug
            }
					}
				}
			}
		}
  `)
  console.log(JSON.stringify(result, null, 4))
  result.data.allYoutubeVideo.edges.forEach(({ node }) => {
    createPage({
      path: `video/${node.fields.slug}`,
      component: path.resolve(`./src/components/video.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
