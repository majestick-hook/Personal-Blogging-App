import React from 'react'
import Blogs from './blogs/Blogs'
import Header from '@/components/header'
import AddBlog from './addBlog/AddBlog'

const DashBoard = () => {
  return (
    <>
    <Header signin={true} />
    <AddBlog />

    </>

  )
}

export default DashBoard