import React from 'react'

const BlogPage = ({params}) => {
    console.log(params.slug,"params");
    
  return (
    <div>
      <h1>Blog Post</h1>
      <h4>{params.slug}</h4>
    </div>
  )
}

export default BlogPage
