export const Drawer = ({ open, MenuHandler }) => {
	return (
		<div>
			<Menu className='transition duration-1000 ease-in-out' open={open}>
				<button
					aria-label='Close'
					className='absolute top-3 right-3 text-5xl text-white cursor-pointer'
					onClick={MenuHandler}
				>
					<span className='text-custom-green'>&times;</span>
				</button>
				<MenuContainer>
					{navLinks.map((link) => (
						<button key={link.id} className={style.item}>
							<span className='text-custom-green'>{link.num}</span>
							<p className='navP '>{link.text}</p>
						</button>
					))}
				</MenuContainer>
			</Menu>
		</div>
	);
};

/* Logic*/
const style = {
	container: `relative top-1/4 w-full text-center mt-8 flex flex-col items-center justify-center gap-5`,
	item: `text-3xl text-gray-400 cursor-pointer font-mono `,
	menu: {
		open: `h-full w-1/2 `,
		close: `w-0 h-full`,
		default: `overflow-x-hidden md:overflow-hidden transition-all duration-1000 ease-in-out fixed z-10 top-0 right-0 bg-navy-light `,
	},
};

function Menu({ children, open }) {
	return (
		<div
			className={`${style.menu.default} 
       ${open ? style.menu.open : style.menu.close}`}
		>
			{children}
		</div>
	);
}

function MenuContainer({ children }) {
	return <div className={style.container}>{children}</div>;
}

const navLinks = [
	{
		id: 1,
		num: 0o1,
		text: 'About',
	},
	{
		id: 2,
		num: 0o2,
		text: 'Work',
	},
	{
		id: 3,
		num: 0o3,
		text: 'Contact',
	},
];
