import Image from "next/image";
import prisma from "../utils/db";
import formatDate from "../lib/formateDate"
import Link from "next/link";
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
  {blogs.map((blog,index) => (
        <Link key={index} href={`blog/${blog.slug}`} className="flex items-center justify-start gap-5 hover:bg-gray-50 w-full rounded-3xl p-2">
            <Image src={blog.imageUrl} width={180} height={100} alt={blog.title} className="rounded-2xl" />
            <div className="flex flex-col items-start justify-start">
              <span className="font-bold text-[16px]"> {blog.title} </span>
                  <span className="text-[#888888]"> {formatDate(blog.createdAt)} </span>
            </div>
          </Link>
        ))}
</div>
  );
}
