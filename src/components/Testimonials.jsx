import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <div className='mt-20 tracking-wide'>
      <h2 className='text-3xl sm:text-5xl lg:6xl my-8 lg:my-20 tracking-wide text-center'>Pricing</h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial , index) => (
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
              <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
                <p>{testimonial.text}</p>
                <div className='flex mt-8 items-start'>
                  <img src={testimonial.image} alt={testimonial.user} className='w-12 h-12 rounded-full mr-6 border border-neutral-300
                  '/>
                  <div>
                    <h5 className=''>{testimonial.user}</h5>
                    <span className='text-sm font-normal italic text-neutral-600'>{testimonial.company}</span>
                  </div>
                </div>
                
                
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
