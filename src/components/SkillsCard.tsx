import React from 'react'

const SkillsCard = ( {skills}: {skills: {aspect: string, skills: string[]}}) => {
  return (
    <div className= "p-5 bg-transparent  border-gray-500 border-4 rounded-lg">
        <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{skills.aspect}</h3>
        </div>
        <div className="flex flex-wrap gap-3">
            {skills.skills.map((skill, index) => 
                <span key={index} className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
            )}

        </div>
  </div>

  )
}

export default SkillsCard