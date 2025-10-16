 


const ExperienceCard = ( {experience}: {experience: {jobtitle: string, company: string, timeframe: string, responsibilities: string[]}}) => {
  return (
    <div className='w-full bg-slate-950 rounded-lg shadow-sm p-4 border border-slate-800 space-y-3 text-slate-100 '>
    <h1 className='text-2xl font-bold'>{experience.jobtitle}</h1>
    <h2 className='text-xl'>{experience.company}</h2>
    <h3>{experience.timeframe}</h3>
    <ul className='w-full flex gap-3 flex-wrap items-center justify-center list-disc p-5'>
      {experience.responsibilities.map((responsibility: string, index: number) => (
        <li className= "w-full" key={index}>{responsibility}</li>
      ))}
    </ul>



  </div>
  )
}

export default ExperienceCard