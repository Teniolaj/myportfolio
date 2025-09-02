import { Globe } from "lucide-react"

const ProjectCard = ({project}: {project: {title: string, description: string, techStack: string[], link: string}}) => {
  return (
    <div className='w-full max-w-sm bg-[#E2E8F0] rounded-lg shadow-md p-4 border border-gray-400 space-y-3 '>
      <h2 className='text-xl font-bold'>{project.title}</h2>
      <p className='w-full'> {project.description}</p>
      <ul className='flex gap-3 flex-wrap items-center justify-center '>
        {project.techStack.map((tech: string, index: number) => 
        <li className='bg-gray-300 rounded-3xl p-2' key={index}>{tech}</li>
        )}
      </ul>
      <div>
        <a href={project.link} className='flex items-center gap-2 justify-center'>
          <Globe size={20} />
          <span>Live Demo</span>
        </a>

      </div>


    </div>
  )
}

export default ProjectCard