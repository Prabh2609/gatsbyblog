import { PortableText } from '@portabletext/react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Layout from '../Components/Layout'
import Recommendation from '../Components/Recommendation'

const myPortableTextComponents = {
  _type: {
    span: ({value})=>{console.log(`inside compoenent ${value}`)},
    image:({value})=>console.log("IMAGE")
  },

  marks: {
    link: ({children, value}) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      )
    },
  },
}

const BlogTemplate = ({data}) => {
    const pathToImage = getImage(data.sanityPost.mainImage.asset.gatsbyImageData);    
    console.log(data)
    return (
    <Layout>
      <Container className='p-4'>
      <GatsbyImage image={pathToImage} alt='main image' className='featuredImage'/>
      <p className='subtitle'>{data.sanityPost.categories[0].title}</p>
      <h4>{data.sanityPost.title}</h4>
      {console.log(data.sanityPost.body[0]._rawChildren)}
      <PortableText
        key={data.sanityPost.id}
        value={data.sanityPost.body}
        components={myPortableTextComponents}
      />
      
    <Recommendation category={data.sanityPost.categories[0].title}/>
    
    </Container>

    </Layout>
  )
}


export const query = graphql`
query MyQuery($title:String) {
    sanityPost(title: {eq: $title}) {
      title
      id
      categories {
        title
      }
      mainImage {
        asset {
          gatsbyImageData
        }
      }
      body{
        _rawChildren
      }
    }
  }
`
export default BlogTemplate