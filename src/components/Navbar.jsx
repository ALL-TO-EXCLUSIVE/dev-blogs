"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Search from "./Search"

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header className='flex items-center justify-between mx-auto max-w-[800px] border-b py-5 px-2 font-[outfit]'>
      <div className='text-2xl font-bold'>
        dev blogs.
      </div>
      <nav className=' flex items-center justify-center gap-5'>
        <Link className={`text-[#888888] hover:bg-gray-100 hover:text-black p-3 rounded-2xl ${pathname === '/' ? 'text-black p-3 rounded-2xl bg-gray-100' : ''}`} href={"/"}>Home</Link>
        <Link className={`text-[#888888] hover:bg-gray-100 hover:text-black p-3 rounded-2xl ${pathname.includes("/blog") ? 'text-black p-3 rounded-2xl bg-gray-100' : ''}`} href={"/blogs"}>Blogs</Link>
        <Link className={`text-[#888888] hover:bg-gray-100 hover:text-black p-3 rounded-2xl ${pathname === '/contact' ? 'text-black p-3 rounded-2xl bg-gray-100' : ''}`} href={"/contact"}>Contact</Link>
        <Search/>
        
      </nav>
    </header>
  )
}

export default Navbar