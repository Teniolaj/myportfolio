import React from 'react'
import { skillsData } from '../../data/PortfolioData'
import SkillsCard from '../SkillsCard'
import { forwardRef} from 'react'



const SkillsSection = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section ref={ref} id="skills" className="bg-gradient-to-r from-[#38BDF8] to-[#9333EA] w-full mx-auto max-w-screen-xxl py-5">
        <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center">Skills</h2>
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