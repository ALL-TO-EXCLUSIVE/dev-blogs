import Image from "next/image";
import prisma from "../utils/db";
import formatDate from "../lib/formateDate"
import Link from "next/link";

export const revalidate = 1000;

export default async function Home() {
  const blogs = await prisma.blog.findMany()
  if(!blogs || blogs.length <= 0){
    return (
      <div className="flex flex-col items-center justify-center">
        <p>No blogs found.</p>
      </div>
    )
  }
  return (
<div className="flex flex-col items-start justify-start max-w-[800px] w-full mx-auto my-10 min-h-[68vh]">
  <h1 className="text-2xl font-bold">Latest Blog</h1>
 <div id="bloglist" className="w-full mt-5">
   {blogs.reverse().map((blog,index) => (
        <Link key={index} href={`blog/${blog.slug}`} className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-5 hover:bg-gray-50 w-full rounded-3xl p-2">
            <Image quality={100} src={blog.imageUrl} width={900} height={900} alt={blog.title} className="rounded-2xl w-full h-full sm:w-[180px] sm:h-[100px] object-cover" />
            <div className="flex flex-col items-start justify-start">
              <span className="font-bold text-[16px]"> {blog.title} </span>
                  <span className="text-[#888888]"> {formatDate(blog.createdAt)} </span>
            </div>
          </Link>
        ))}
 </div>
</div>
  );
}
