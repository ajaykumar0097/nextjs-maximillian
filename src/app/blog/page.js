import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <h1>The blog</h1>
      <Link href='/blog/post1'>Post1</Link>
      <Link href='/blog/post2'>Post2</Link>
    </div>
  )
}

export default Blog
