
const path = require('path')



exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allTwitterSearchTweetsGatsbyHashtag{
                edges {
                    node{
                        id
                    }
                }
            }
        }
    `)

    res.data.allTwitterSearchTweetsGatsbyHashtag.edges.forEach((edge)=>{
        createPage({
            component: blogTemplate,
            path: `/tweet/${edge.node.id}`,
            context: {
                id: edge.node.id
            }
        })
    })
}




// module.exports.onCreateNode = ({node, actions}) => {
//     const{ createNodeField} = actions
//    // console.log(JSON.stringify(node, undefined, 4))
//    if (node.internal.type === 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//         console.log('BLAHBLAH', slug)
//         console.log(node.internal.type)
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug,
//         })
//     }
// }


// module.exports.createPages = async ({graphql, actions}) => {
//     const {createPage} = actions
//     const blogTemplate = path.resolve('./src/templates/blog.js')
//     const res = await graphql(`
//         query {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         fields {
//                             slug
//                         }
//                     }
//                 }
//             }
//         }
//     `)
    
//     console.log(res.data.allMarkdownRemark.edges)
//     res.data.allMarkdownRemark.edges.forEach((edge)=>{
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${edge.node.fields.slug}`,
//             context: {
//                 slug: edge.node.fields.slug
//             }
//         })
//     })
// }
