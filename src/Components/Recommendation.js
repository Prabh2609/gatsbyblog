import { graphql, useStaticQuery,Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import slugify from 'slugify'

const Recommendation = ({category}) => {
    const query=graphql`
    query Similar($category:String) {
        allSanityPost(
          filter: {categories: {elemMatch: {title: {eq: $category}}}}
          limit: 3
        ) {
          nodes {
            title
            mainImage {
              asset {
                gatsbyImageData
              }
            }
          }
        }
      }      
    `
    const data = useStaticQuery(query)
    console.log(data)
    return (
    <Container className='bg-light'>
        <Row>
            <p className='subtitle text-center p-4'>You May Also Like</p>
        </Row>
        <Row className='p-4' xs={1} md={2} lg={3}>
            {
                data.allSanityPost.nodes.map((item,indx)=>{
                    const slug = slugify(item.title,{lower:true})
                    return(
                            <Col className='mb-4'>
                            <Link to={`/${slug}`}>
                                <GatsbyImage
                                    image={item.mainImage.asset.gatsbyImageData}
                                    alt='main image'
                                    className='recommendationImage'
                                />
                                <h6 className='recommendationTitle'>{item.title}</h6>
                                </Link>
                            </Col>
                        
                    )
                })
            }
            
        </Row>   
    </Container>
  )
}

export default Recommendation