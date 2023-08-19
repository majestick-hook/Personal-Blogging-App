
// export default function Blogs({articles}) {

  
//     return (
//       <>
// <section class="text-gray-600 body-font" >
//   <div class="container px-5 py-24 mx-auto">
//     <div class="flex flex-wrap -m-4">
//       <div class="p-4 md:w-1/3">
//         <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
    

//           <div class="p-6">
//             <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
//             <h1 class="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
//             <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
//             <div class="flex items-center flex-wrap ">
              
//               <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
//                 <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                   <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                   <circle cx="12" cy="12" r="3"></circle>
//                 </svg>1.2K
//               </span>
//               <span class="text-gray-400 inline-flex items-center leading-none text-sm">
//                 <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
//                   <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                 </svg>6
//               </span>
//             </div>
//             </div>
          
//             </div>
//             </div>
//           </div>
//       </div>
//       </section>
//       </>
//     );
//   }

// export default function Blogs({ articles }) {}
//   console.log(articles);
//   return (
    // <div>
    //   <h2 className="my-3 text-lg font-bold">All Blogs</h2>
    //   {
    //     articles.map((node)=>{
    //       return(
    //       <div className="space-y-3">
    //       <div className="flex items-center">
    //         <div><img src={node.urlToImage} className="w-50 h-50" alt="" /></div>
    //         <div>
    //           <div>{node.title}</div>
    //           <div>{node.publishedAt}</div>
    //           <div>{node.author}</div>
    //           <div>{node.url}</div>
    //         </div>
    //       </div>
    //       <div>{node.description}</div>
    //       <div className="flex gap-3">
    //         <div className="cursor-pointer bg-[#ff0000] hover:bg-[#ff3333] rounded-lg text-white font-medium py-2 px-4">Delete</div>
    //         <div className="cursor-pointer bg-[#7575a3] hover:bg-[#9494b8] rounded-lg text-white font-medium py-2 px-4">Edit</div>
    //       </div>
    //     </div>)
    //     })
    //   }

    // </div>
//   )
// }



//   export const getServerSideProps = async (context) => {

//   const pageNumber = context.query.slug
//   console.log('pageNumber', pageNumber);
//   if (!pageNumber || pageNumber > 5 || pageNumber < 1) {
//       return {
//           props: {
//               articles: [],
//               pageNumber: 1,
//           }
//       }
//   }
// }
//   const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9f562365939a4e94a85684951acd9b41')

//   const data = await response.json()
  
//   const { articles } = data;

//   return {
//     props: {
//       articles,
//       // pageNumber: Number(pageNumber)
//     }
//   }
// }
/* { articles.map((({}) => {
  return (
    <div className="main border-2 border-gray-500 rounded-lg px-3 py-4 text-justify shadow-xl" key={ind}>
    <div className="title text-xl font-semibold">{blog.author}</div>
    <div className=" text-sm text-[6C757D]">August</div>
    <p className="text-sm text-[6C757D]">Whisper is an automatic speech recognition (ASR) system trained on 680,000 hours of multilingual and multitask supervised data collected from the web. We show that the use of such a large and diverse dataset leads to improved robustness to accents, background noise and technical language. Moreover, it enables transcription in multiple languages, as well as translation from those languages into English. We are open-sourcing models and inference code to serve as a foundation for building useful applications and for further research on robust speech processing.</p>
    </div>
    
    
  })}
  ) */