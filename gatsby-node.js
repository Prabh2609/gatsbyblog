const path = require(`path`)


exports.createPages = async({ graphql, actions })=>{
    const { createPage } = actions
    const result = await graphql(`
    query GetBlogs {
        allSanityPost {
          totalCount
          nodes {
            categories {
              title
            }
          }
        }
      }
      
    `)

    console.log('######')
    console.log(result)
    console.log('########')
    
    result.data.allSanityPost.nodes.forEach(element=>{
        element.categories.forEach(category=>{
            createPage({
                path:`/${category.title}`,
                component:path.resolve('src/template/category-template.js'),
                context:{
                    category:category.title
                }                
            })
        })
    })
    
}