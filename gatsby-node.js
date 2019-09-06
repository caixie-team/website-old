const _ = require('lodash')
const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')
const {fmImagesToRelative} = require('gatsby-remark-relative-images')
const {fluid} = require("gatsby-plugin-sharp")
const {orderBy} = require("lodash")
const slash = require(`slash`)
const {
    GraphQLList,
    GraphQLJSON,
} = require(`gatsby/graphql`)
const Remark = require(`remark`)

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions

    return graphql(`
    {
        allMarkdownRemark{
            edges {
                node {
                    html
                    excerpt
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        templateKey
                        title
                        subtitle
                        summary
                        primaryColor
                        sort
                        hero {
                            publicURL
                        }
                    }
                }
            }
        }
    }
  `).then(result => {
        if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        let projectArray = []

        posts.forEach((edge, index, array) => {
            // const id = edge.node.id
            const templateKey = String(edge.node.frontmatter.templateKey)
            if (templateKey === 'project') {
                // console.log(edge.node)
                projectArray.push(edge.node)
            } else {
                // if (String(edge.node.frontmatter.templateKey))
                // createPage({
                //     path: edge.node.fields.slug,
                //     tags: edge.node.frontmatter.tags,
                //     component: path.resolve(
                //         `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
                //     ),
                    // additional data can be passed via context
                    // context: {
                    //     id,
                    // },
                // })
            }
        })
        const sortArray = orderBy(projectArray, [(o) => {
            return o.frontmatter.sort
        }])
        for (let nodeIndex = 0; nodeIndex < sortArray.length; nodeIndex++) {
            createPage({
                path: sortArray[nodeIndex].fields.slug,
                component: path.resolve(`src/templates/project/index.js`),
                context: {
                    id: sortArray[nodeIndex].id,
                    next: nodeIndex < sortArray.length -1 ? sortArray[nodeIndex + 1].id : sortArray[0].id
                },
            })
        }

        // Tag pages:
        // let tags = []
        // Iterate through each post, putting all found tags into `tags`
        // posts.forEach(edge => {
        //     if (_.get(edge, `node.frontmatter.tags`)) {
        //         tags = tags.concat(edge.node.frontmatter.tags)
        //     }
        // })
        // Eliminate duplicate tags
        // tags = _.uniq(tags)

        // Make tag pages
        // tags.forEach(tag => {
        //     const tagPath = `/tags/${_.kebabCase(tag)}/`
        //
        //     createPage({
        //         path: tagPath,
        //         component: path.resolve(`src/templates/tags.js`),
        //         context: {
        //             tag,
        //         },
        //     })
        // })
    })
}
exports.setFieldsOnGraphQLNodeType = async ({
                                                type,
                                                pathPrefix,
                                                getNode,
                                                getNodesByType,
                                                cache,
                                                reporter,
                                                createContentDigest,
                                                ...rest
                                            },
                                            pluginOptions) => {
    if (type.name !== `MarkdownRemark`) {
        return {}
    }

    return new Promise((resolve, reject) => {
        // Setup Remark.
        const {
            blocks,
            commonmark = true,
            footnotes = true,
            gfm = true,
            pedantic = true,
        } = pluginOptions

        const remarkOptions = {
            commonmark,
            footnotes,
            gfm,
            pedantic,
        }
        if (_.isArray(blocks)) {
            remarkOptions.blocks = blocks
        }
        let remark = new Remark().data(`settings`, remarkOptions)
        function getFileObject(absolutePath, name) {
            return {
                id: `${absolutePath} absPath of file`,
                name: name,
                absolutePath,
                extension: `png`,
                width: 1440,
                internal: {
                    contentDigest: createContentDigest(node),
                },
            }
        }

        return resolve({
            sections: {
                type: new GraphQLList(GraphQLJSON),
                resolve(markdownNode) {
                    return markdownNode.sections
                },
            },
        })
    })

}
exports.onCreateNode = async ({node, actions, getNode, createContentDigest}) => {
    function getFileObject(absolutePath, name) {
        return {
            id: `${absolutePath} absPath of file`,
            name: name,
            absolutePath,
            extension: `png`,
            width: 1440,
            internal: {
                contentDigest: createContentDigest(node),
            },
        }
    }
    const {createNodeField} = actions
    if (node.internal.type === `MarkdownRemark`
        || node.internal.type === `Mdx`) {
        // const content = await loadNodeContent(node)
        // const slug = createFilePath({node, getNode})
        // const templateKey = node.frontmatter.templateKey
        node.sections = []
        if (node.frontmatter.sections) {
            for (let section of node.frontmatter.sections) {
                if (section.type === "image") {
                    const absolutePath = path.join(__dirname, "/static/" + section.image)
                    const file = getFileObject(absolutePath, section.image.split("/").pop().split(".")[0])
                    // const file = getFileObject()
                    const args = {
                        maxWidth: 375,
                    }
                    const result = await fluid({file, args})
                    section.image = result
                }
                if (section.type === "imagegrid") {
                    let images = []
                    for (let image of section.images) {
                        // const absolutePath = path.join(__dirname, "src/data/project/" + image)
                        const absolutePath = path.join(__dirname, "/static/" + image)
                        const file = getFileObject(absolutePath, image.split("/").pop().split(".")[0])
                        const args = {
                            maxWidth: 1440,
                        }
                        const result = await fluid({
                            file,
                            args,
                        })
                        images.push(result)
                    }
                    section.images = images
                }
                node.sections.push(section)
            }
        }
        delete node.frontmatter.sections
        // createNodeField({
        //     node,
        //     name: `slug`,
        //     value: templateKey === "project" || templateKey === "insight" ? templateKey + slug : slug,
        // })
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
        createNodeField({
            node,
            name: "isPublic",
            value: "isPublic" in node.frontmatter ? node.frontmatter.isPublic : true,
        })

    }
    fmImagesToRelative(node) // convert image paths for gatsby images
}

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
            alias: { $components: path.resolve(__dirname, "src/components") },
        },
    })
}
