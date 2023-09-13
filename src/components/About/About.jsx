"use client"
import { infos } from '../../data';
import 'animate.css';
import { Slide } from 'react-awesome-reveal';


export const About = () => {
  return (
    <section id='about' className=' bg-slate-200'>
      <div className='w-full container mx-auto px-10 py-20'>
        <Slide direction='up'>
          <p className='uppercase font-bold text-2xl text-slate-800 max-sm:text-center'>
            <span className='  text-sky-400 underline underline-offset-4'>Leading No.1 </span> Agency world wide. <br />world class services in <span className='text-sky-400 underline underline-offset-4'>best price with quality</span>.
          </p>
        </Slide>
        <ul className='my-9 [&>*:not(:last-child)]:mb-6 md:grid md:grid-cols-3 md:[&>*:not(:last-child)]:mb-0 md:gap-3'>
          <Slide>


            {
              infos.map(({ title, total, descp }) => {
                return (
                  <li key={title}>
                    <div className=' bg-slate-100 border-2 rounded-md p-6 border-slate-600 hover:bg-slate-800 hover:cursor-pointer
                 hover:shadow-xl group  hover:border-transparent'

                    >
                      <h3 className=" font-semibold mb-0.5 text-slate-800 group-hover:text-sky-400 text-lg">{title}</h3>
                      <p className="mb-2 font-light text-slate-700 group-hover:text-slate-300">{total}+</p>
                      <p className="text-slate-700 font-light text-md group-hover:text-slate-300">
                        {descp}
                      </p>
                    </div>
                  </li>
                )
              })
            }

          </Slide>
        </ul>

      </div>
    </section>
  )
};