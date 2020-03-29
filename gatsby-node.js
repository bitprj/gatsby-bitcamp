
// const path = require('path')



// exports.createPages = async ({graphql, actions}) => {
//     const {createPage} = actions
//     const blogTemplate = path.resolve('./src/templates/blog.js')
//     const data = await graphql(`
//         query {
//             recipe{
//                 recipe2s {
//                     ingredients
//                     timeToCook
//                     title
//                     edges {

//                         slug
//                     }
//                 }
//             }
//         }
//     `)
    
//     console.log(data.data.recipe.recipe2s)
//     if (data.data.recipe.recipe2s !== null)
//     data.data.recipe.recipe2s.forEach((ingredients)=>{
//         console.log(data.data.recipe.recipe2s.title)
//         createPage({
//             component: blogTemplate,
//             path: `/blog/${data.data.recipe.recipe2s.title}`,
//             context: {
//                 slug: data.data.recipe.recipe2s.title
//             }
//         })
//     })
// }




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
