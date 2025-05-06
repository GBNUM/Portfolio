import React from 'react'
import gojo from '/gojo abt.png'
export const About = () => {
  return (
    <div>


        <div className='flex gap-20 '>
            <div>
                <img src={gojo} alt="" className="w-100 h-100  mt-20 head"/>
            </div>
            <div className=' w-200 pt-50'>
<h1 className='pink text-4xl font-bold pb-20 '>About me</h1>
<p className='white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente dignissimos pariatur aut similique reiciendis dolor ex iusto quidem commodi ipsa ea harum laboriosam eaque, praesentium quis necessitatibus quasi ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, veniam voluptatem! Porro suscipit molestias adipisci asperiores voluptates reprehenderit voluptatum ducimus laborum nam facere sunt quo voluptate, nulla incidunt ea culpa.  </p>
            </div>
        </div>
    </div>
  )
}
