import Link from 'next/link'
import React from 'react'

const contactPage = () => {
  return (
    <div className="flex flex-col items-start justify-start max-w-[800px] w-full mx-auto my-10 min-h-[68vh]">
        <h1>Contact is not available, you can dm me on  <Link href={"https://www.instagram.com/ALLTOEXCLUSIVE"} target='_blank' className='text-blue-500'>instagram</Link> </h1>
    </div>

  )
}

export default contactPage