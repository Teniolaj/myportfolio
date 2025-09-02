import ExperienceCard from '../ExperienceCard'
import { experienceData } from '../../data/PortfolioData'
import { forwardRef } from 'react'

const ExperienceSection = forwardRef<HTMLDivElement, object>((_, ref) => {

  return (
    <section ref={ref} id="experience"className='w-full mx-auto max-w-screen-xxl bg-[#F1F5F9]'>
        <div className="w-full text-center py-3">
            <h1 className='text-4xl font-bold'> My Experience</h1>

            <div className=' justify-center flex flex-col md:flex-row  gap-10 py-10 w-full px-5'> 
                {experienceData.map((experience, index) => 
                  <ExperienceCard key={index} experience={experience}/>
                )}
            </div>


        

        </div>

    </section>
  )
})

export default ExperienceSection