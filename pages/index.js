import Image from 'next/image';

export default function Home() {
	return (
		<div className='flex flex-col justify-center gap-32'>
			{/* FIRST SECTION  */}
			<section className='pt-5 space-y-2'>
				<h1 className='md:text-lg text-custom-green font-mono '>Hi, my name is</h1>
				<h2 className='text-[40px] md:text-[80px] text-slate-lightest font-semibold'>
					Fabio Catino
				</h2>
				<h2 className='leading-10 md:leading-none text-[40px] md:text-[80px] text-slate font-semibold'>
					I build things for the web.
				</h2>
			</section>

			{/* SECOND SECTION */}

			<section>
				<div className='flex items-center gap-5 '>
					<span className='text-custom-green md:text-4xl font-mono'>01.</span>
					<p className='navP text-[26px] md:text-4xl font-bold '>About me</p>
					<span className='self-center w-[100px] md:w-[300px] text-navy-lightest_navy h-[1px] border-t-[1px] relative top-[5px]' />
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 pt-10 gap-10'>
					<p className='text-slate text-lg md:text-xl font-semibold col-span-1'>
						Hi, I am Fabio <br/>
						Originally, I am from Bari, Italy. I just graduated
						from the University of West London with a Bachelor’s Degree in Cyber
						Security and I am passionate about Web Development. Now, I’m looking
						for an opportunity to further develop my current skill set as a
						Junior Developer.
					</p>

					<div className='relative h-52 w-52 md:h-[300px] md:w-[300px] bg-custom-green '>
						<Image
							className='hover:scale-105 hover:opacity-100 opacity-50 transition duration-300 ease-in-out '
							layout='fill'
							src='/linkpic.png'
							objectFit='cover'
						></Image>
					</div>
				</div>
			</section>
		</div>
	);
}
