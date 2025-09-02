import { useState } from 'react'

interface navProps {
  onSkillClick: () => void,
  onHeroClick: () => void,
  onAboutClick: () => void,
  onProjectsClick: () => void,
  onExperienceClick: () => void,
  onContactClick: () => void
}



const Navbar = ({ onSkillClick, onHeroClick, onAboutClick, onProjectsClick, onExperienceClick, onContactClick }: navProps) => {


    const [open, setOpen] = useState(false);

    const toggleMobileMenu = () => {
        setOpen(!open);
        if (!open) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      };

  return (
    <div>
        <nav className=" w-full px-3 py-1 items-center justify-center bg-gray-400 fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between max-w-screen-xxl lg:px-16 px-6 py-5 w-full mx-auto  lg:relative">

                <div className=" w-full z-30 flex items-center justify-between lg:pb-0 ">

                    <h1 className="text-2xl font-bold"> Teniola <span className="text-blue-500">John</span></h1>

                    {/* DESKTOP MENU */}
                    <div className="hidden gap-4 text-lg font-semibold items-center justify-center  md:flex">
                        <a className='hover:text-blue-500 cursor-pointer text-sm' onClick={onHeroClick}>Home</a>
                        <a className='hover:text-blue-500 cursor-pointer text-sm' onClick={onAboutClick}>About</a>
                        <a className='hover:text-blue-500 cursor-pointer text-sm' onClick={onProjectsClick}>Projects</a>
                        <a className='hover:text-blue-500 cursor-pointer text-sm' onClick={onExperienceClick}>Experience</a>
                        <a className='hover:text-blue-500 cursor-pointer text-sm' onClick={onSkillClick}>Skills</a>
                        {/* <a className='hover:text-blue-500 cursor-pointer text-sm'>Certification</a> */}
                        <a className='hover:text-blue-500 cursor-pointer text-sm' onClick={onContactClick}>Contact</a>
                    </div>

                    <div onClick={toggleMobileMenu} className="md:hidden cursor-pointer">
                            {open? (<span className='text-2xl'>&times;</span>) : (<span className='text-2xl'>&#9776;</span>)}
                    </div>
                </div>
            </div>





                {/* mobile view */}
                <ul
                className={`lg:hidden uppercase flex flex-col gap-4 text-lg font-semibold items-center justify-center fixed w-full h-screen top-0 left-0 bg-gray-400 py-32 duration-500 ease-in-out transition-all ${
                open ? "translate-x-0" : "translate-x-[-100%]"
                }`}>
                    
                        <a href="#home"><li onClick={toggleMobileMenu}>Home</li></a>
                        <a href="#about"><li onClick={toggleMobileMenu}>About</li></a>
                        <a href="#projects"><li onClick={toggleMobileMenu}>Projects</li></a>
                        <a href="#experience"><li onClick={toggleMobileMenu}>Experience</li></a>
                        <a href="#skills"><li onClick={toggleMobileMenu}>Skills</li></a>
                        {/* <li onClick={toggleMobileMenu}>Certification</li> */}
                        <a href="#contact"><li onClick={toggleMobileMenu}>Contact</li></a>
                </ul>
              
        </nav>
    </div>
  )
}

export default Navbar