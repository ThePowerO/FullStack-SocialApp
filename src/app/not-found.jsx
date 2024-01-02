import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>This page doesn't exists</p>
      <Link href='/'>Return to Home Page</Link>
    </div>
  )
}

export default notFound
