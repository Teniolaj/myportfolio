import emailjs from 'emailjs-com'
import { useState } from 'react'
import { forwardRef } from 'react'
import { useRef } from 'react'

const ContactSection = forwardRef<HTMLDivElement, object>((_, ref) => {
  
  const formRef = useRef<HTMLFormElement | null>(null)

  const [formData, setFormData] = useState({name: "", email: "", message: ""})
  
  const SERVICE_ID = "service_lfjmrcq"
  const TEMPLATE_ID = "template_4cg1std"
  const PUBLIC_KEY = "RZcNXqWmCStuniDeW"

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()

    if (!formRef.current) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(() => {
      alert("Message sent successfullt")
      setFormData({name: "", email: "", message: ""})
    })
  }

  return (
  <section ref={ref} id="contact" className='w-full mx-auto max-w-screen-xxl py-10 bg-slate-900 text-slate-100'>
        <div className='w-full text-center py-3 px-5'>
                <h1 className='text-4xl font-bold'>Get in Touch</h1>

                <form className="space-y-5 max-w-md mx-auto mt-8 border border-slate-800 rounded-lg p-5 bg-slate-950" onSubmit={handleSubmit} ref={formRef}>
                  <div className=''>
                    <input 
                      type="text" 
                      placeholder='Name' 
                      id='name' 
                      name='name'
                      required 
                      className='w-full p-4 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500' 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className=''>
                    <input 
                      type="email" 
                      placeholder='Email' 
                      id='email' 
                      name='email'
                      required 
                      className='w-full p-4 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500' 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className=''>
                    <textarea 
                      placeholder='Message' 
                      id='message' 
                      name='message'
                      rows={5}
                      required 
                      className='w-full p-4 border border-slate-700 rounded-lg bg-slate-900 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none' 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <div className=''>
                    <button 
                      type="submit" 
                      className='w-full bg-teal-500 text-slate-900 py-3 px-6 rounded-lg hover:bg-teal-400 transition-colors duration-200 font-medium'
                    >
                      Send Message
                    </button>
                  </div>
                </form>
        </div>
    </section>
  )
})

export default ContactSection