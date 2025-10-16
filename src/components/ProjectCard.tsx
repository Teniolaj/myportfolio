import { Globe } from "lucide-react"

const ProjectCard = ({project}: {project: {title: string, description: string, techStack: string[], link: string}}) => {
  return (
    <div className='w-full max-w-sm bg-slate-950 rounded-lg shadow-sm p-4 border border-slate-800 space-y-3 text-slate-100 '>
      <h2 className='text-xl font-bold'>{project.title}</h2>
      <p className='w-full'> {project.description}</p>
      <ul className='flex gap-3 flex-wrap items-center justify-center '>
        {project.techStack.map((tech: string, index: number) => 
        <li className='bg-slate-900 text-slate-300 rounded-3xl px-3 py-1 border border-slate-800' key={index}>{tech}</li>
        )}
      </ul>
      <div>
        <a href={project.link} className='flex items-center gap-2 justify-center text-teal-400 hover:text-teal-300'>
          <Globe size={20} />
          <span>Live Demo</span>
        </a>

      </div>


    </div>
  )
}

export default ProjectCard