import { graphql,Link } from 'gatsby'
import React from 'react'
import { Container, Row,Card,Col } from 'react-bootstrap'
import slugify from 'slugify'
import Layout from '../Components/Layout'
import {GatsbyImage,getImage} from 'gatsby-plugin-image'

const CategoryTemplate = ({data}) => {
  console.log(data)
  return (
    <Layout>
      <Container>
      <Row xs={1} md={2} className='g-4 h-2'>
          {
            data.allSanityPost.nodes.map((item,index)=>{
              const pathToImage = getImage(item.mainImage.asset.gatsbyImageData)
              console.log(pathToImage)
              const slug = slugify(item.title,{lower:true})
              const text = item.body[0].children[0].text
              return(
                
                <Link key={index} to={`/${slug}`}>
                  <Col >
                    <Card className="card">
                      <GatsbyImage
                        image={pathToImage}
                        alt='card image'
                        className="cardImage"
                      />
                      <Card.Body>
                        <Card.Subtitle className="subtitle">{item.categories[0].title}</Card.Subtitle>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text className="cardText">{text.length>300?text.substring(0,300)+'...':text}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Link>
                
              )
            })
          }
      </Row>
    </Container>
    </Layout>
  )
}

export const query = graphql`
query getBlogByCategory($category: String) {
  allSanityPost(filter: {categories: {elemMatch: {title: {eq: $category}}}}) {
    nodes {
      id
      categories{
				title
      }
      body{
				children{
					text
        }
      }
      title
      mainImage {
        asset {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
}

`

export default CategoryTemplate