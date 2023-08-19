import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Blogs from './blogs/Blogs'

const inter = Inter({ subsets: ['latin'] })

export default function Home({articles}) {
  
  return (
    <>
    <Header />
    {/* <Blogs articles={articles} />// */}
    <div>
      <h2 className="mx-20 py-20   text-lg font-bold">BLOGS FOR YOU</h2>
      {
        articles.map((node)=>{
          return(
            <div className="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div><img src={node.urlToImage} className="p-4 md:w-1/3" alt="" /></div>
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{node.publishedAt}</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{node.author}</h1>
            <p class="leading-relaxed mb-3">{node.title}</p>
            <p class="leading-relaxed mb-3">{node.description}</p>
            <p class="leading-relaxed mb-3">{node.url}</p>
              {/* <div>{node.title}</div>
              <div>{node.publishedAt}</div>
              <div>{node.author}</div>
              <div>{node.url}</div> */}
            </div>
          </div>
          {/* <div>{node.description}</div> */}
          {/* <div className="flex gap-3">
            <div className="cursor-pointer bg-[#ff0000] hover:bg-[#ff3333] rounded-lg text-white font-medium py-2 px-4">Delete</div>
            <div className="cursor-pointer bg-[#7575a3] hover:bg-[#9494b8] rounded-lg text-white font-medium py-2 px-4">Edit</div>
          </div> */}
        </div>)
        })
      }

    </div>
    </>
    
  )
}
export const getServerSideProps = async (context) => {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9f562365939a4e94a85684951acd9b41')

  const data = await response.json()
  
  const { articles } = data;

  return {
    props: {
      articles,
      // pageNumber: Number(pageNumber)
    }
      }}
