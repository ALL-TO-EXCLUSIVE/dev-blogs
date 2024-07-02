import Image from "next/image";
import prisma from "../../../utils/db";
import formatDate from "../../../lib/formateDate";

const page = async ({ params }) => {
  const slug = params.slug;
  const blog = await prisma.blog.findUnique({ where: { slug } });
  if(!blog){
    const sad = ":("
    return <div className="w-full h-screen flex items-center justify-center text-5xl font-bold">Blog not found {sad}</div>;
  }
  return (
    <article className="mx-auto mt-10 max-w-[800px]">
        <div className="flex flex-col items-center justify-center gap-[12px]">
        <h1 className="font-semibold text-[40px] text-center tracking-tight font-[poppins]">{blog.title}</h1>   
        <span className="text-[16px] text-[#888888]"> {formatDate(blog.createdAt)} </span>
        </div>
      <Image
        width={1000}
        height={600}
        quality={100}
        className="w-full object-cover rounded-2xl my-10"
        src={blog.imageUrl}
      />
      <div className="md:px-10" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
};

export default page;
