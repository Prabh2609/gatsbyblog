import React from "react"
import Layout from "../Components/Layout"
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql,useStaticQuery,Link } from 'gatsby'
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import '../assets/css/main.css'
import slugify from "slugify";

const query = graphql`
  {
    allSanityPost {
      nodes {
        id
        title
        categories {
          title
        }
        body {
          children {
            text
          }
        }
        mainImage {
          asset {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
    }
  }`

const Home=()=> {
  const data = useStaticQuery(query)
  const allPosts = data.allSanityPost.nodes
  const pathToFeaturedImage = getImage(allPosts[0].mainImage.asset.gatsbyImageData)
  console.log(allPosts[0])
  return <Layout>
    
    <Container key={allPosts[0].id} className='mb-4'>
      <Link to={`/${slugify(allPosts[0].title,{lower:true})}`}>
      <Row>
        <GatsbyImage
          image= {pathToFeaturedImage}
          alt='main image'
          className="featuredImage"
        />
      </Row>
      <Row className='subtitle'>
          <p>{allPosts[0].categories[0].title}</p>
      </Row>
      <Row>
        <h1>{allPosts[0].title}</h1>
      </Row>
      <Row>
        <p >{allPosts[0].body[0].children[0].text}</p>
      </Row>
      </Link>
    </Container>
    <Container >
      <Row xs={1} md={2} className='g-4 h-2'>
          {
            allPosts.map((item,index)=>{
              const pathToImage = getImage(item.mainImage.asset.gatsbyImageData)
              console.log(pathToImage)
              const slug = slugify(item.title,{lower:true})
              const text = item.body[0].children[0].text
              return(
                index>0 && index<5?
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
                :
                null
              )
            })
          }
      </Row>
      <Container>
        <Row className='bg-light p-4 my-4'>
          <div className='p-4 text-center'>
            <h4>Sign Up to our newsletter!!</h4>
            <Form>
              <Form.Group className="mb-3" >
              <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
              <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form>
          </div>          
        </Row>
        <Row xs={1} md={2} className='g-4 h-2'>
          {
            allPosts.map((item,index)=>{
              const pathToImage = getImage(item.mainImage.asset.gatsbyImageData)
              const text = item.body[0].children[0].text
              const slug = slugify(item.title,{lower:true})
              return(
                index>4?
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
                :
                null
              )
            })
          }
      </Row>
      </Container>
    </Container>  
  </Layout>
}

export default Home


