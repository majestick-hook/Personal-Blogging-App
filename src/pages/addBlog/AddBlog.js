import React from 'react'

const AddBlog = () => {
  return (
    <div className="max-w-[1000px] py-6 px-6 rounded-3xl mt-8 create-blog-container mx-auto">
        <div className="text-center mb-6  dark:text-black text-2xl font-bold  ">DashBoard</div>
        <div className="flex flex-col space-y-5 mx-auto  max-w-[700px]">
          <input
            type="text"
            name="blogtitle"
            placeholder="Title"
            className=" h-11 rounded-lg blog-fields input"
            id="blogtitle"
          />
          <input
            type="text"
            name="blogdesc"
            placeholder="What's in your mind"
            className=" h-24 rounded-lg blog-fields input"
            id="blogdesc"
          />
          <div className="cursor-pointer bg-[#ff9900] hover:bg-[#ffad33] rounded-xl h-10 w-32 text-white font-medium flex items-center justify-center">
            Add a Demo
          </div>
        </div>
      </div>
  )
}

export default AddBlog