import ProjectCard from '../ProjectCard'
import { projectsData } from '../../data/PortfolioData'
import { forwardRef } from 'react'

export const ProjectsSection = forwardRef<HTMLDivElement, object>((_, ref) => {

  return (
    <section ref={ref} id="projects" className='w-full mx-auto max-w-screen-xxl bg-slate-900 text-slate-100'>
        <div className="w-full text-center py-3">
            <h1 className='text-4xl font-bold'> Projects</h1>

            <div className='md:flex gap-5 justify-center py-5 w-full px-5 flex flex-wrap'> 
                {projectsData.map((project, idx) => 
                    <ProjectCard key={idx} project={project} />
                )}
            </div>

        

        </div>

    </section>
  )
})
