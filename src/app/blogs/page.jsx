import React from "react";
import prisma from "../../utils/db";
import Link from "next/link";

const blogsPage = async () => {
  const categories = await prisma.category.findMany();
  return (
    <div className="flex flex-col items-start justify-start max-w-[800px] w-full mx-auto my-10 min-h-[68vh]">
      <h1 className="text-2xl font-bold tracking-tight text-[poppins]">
        Categories
      </h1>
      <ul className=" flex items-center justify-center gap-5 mt-3">
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={`text-sm px-4 py-2  rounded-full ${
                category.name == "art" ? "border-2 border-yellow-500" : ""
              } ${
                category.name == "coding" ? "border-2 border-blue-500" : ""
              } border-2 border-black`}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default blogsPage;
