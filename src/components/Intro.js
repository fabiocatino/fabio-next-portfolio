import React from 'react'

const Intro = () => {
    return (
        <section className='space-y-1 min-h-screen flex flex-col justify-center items-start xl:mx-[51px] animate-fadedown'>
				<h1 className='md:text-lg text-custom-green font-mono '>
					Hi, my name is
				</h1>
				<h2 className='text-[40px] md:text-[80px] text-slate-lightest font-semibold'>
					Fabio Catino
				</h2>
				<h2 className='leading-10 md:leading-none text-[40px] md:text-[80px] text-slate font-semibold'>
					I build things for the web.
                    loremx25
					<p className='text-xl max-w-[50%] py-5'></p>
				</h2>
			</section>
    )
}

export default Intro
