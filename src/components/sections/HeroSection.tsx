import { forwardRef } from 'react'

export const HeroSection = forwardRef<HTMLDivElement, object>((_, ref) => {

  return (
    <section ref={ref} id="home" className="w-full mx-auto max-w-screen-xxl py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <div className='flex flex-col gap-4 items-center justify-center py-4 px-2 w-full text-center'>
        <h1 className='text-4xl font-bold'>Teniola John</h1>
        <h2 className='md:text-2xl text-xl font-bold'>Frontend Developer & AI Automation Specialist</h2>
        <p className='text-lg'>Creative software developer skilled in React, Next.js, 
          Tailwind, and AI tools like GPT-4, Botpress, and n8n. I
          bring user-friendly designs to life with intelligent functionality
        </p>

        <div className="flex gap-4 flex-col md:flex-row w-full md:items-center justify-center">
          <a href="#projects" className='bg-teal-500 hover:bg-teal-400 text-slate-900 font-medium p-2 rounded-md cursor-pointer transition-colors'>View Projects</a>
          <a href="/Teniola-John-Resume.pdf" download className='bg-slate-900 text-slate-100 p-2 rounded-md cursor-pointer border border-slate-700 hover:bg-slate-800 transition-colors'>Download Resume</a>
          <a href='#contact' className='bg-slate-800 hover:bg-slate-700 text-slate-100 p-2 rounded-md cursor-pointer transition-colors'>Contact Me</a>
        </div>
      </div>
    </section>
  )
})
