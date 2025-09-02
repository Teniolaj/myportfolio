import { forwardRef } from 'react'

export const AboutSection = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <section ref={ref} id="about" className='w-full mx-auto max-w-screen-xxl bg-[#F8FAFC]'>
        <div className="w-full text-center py-3 px-2">
            <h1 className='text-3xl font-bold'>My Journey</h1>

            <p> I began as a front-end intern, building UI components in React and working closely with senior developers at Insight-Velocitee...</p>
            <p> With the rise of AI tools, I started automating workflows, building GPT-powered bots, and exploring voice agents...</p>
            <p> ow, I specialize in blending elegant UI with powerful AI backends. I'm looking for remote opportunities where I can help build the future of AI-driven web experiences.</p>


        </div>
    </section>
  )
})
