import { skillsData } from '../../data/PortfolioData'
import SkillsCard from '../SkillsCard'
import { forwardRef} from 'react'



const SkillsSection = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
  <section ref={ref} id="skills" className="bg-slate-900 w-full mx-auto max-w-screen-xxl py-5">
        <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-slate-100">Skills</h2>
        </div>

        <div className=' gap-5 justify-center flex flex-col md:flex-row py-5 px-5'>
            {skillsData.map((skill, index) => 
            <SkillsCard key={index} skills={skill} />
            )}
        </div>

    </section>

  )
})

export default SkillsSection