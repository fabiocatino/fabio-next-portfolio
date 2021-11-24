import About from '../src/components/About';
import LeftSidebar from '../src/components/Layout/LeftSidebar';
import Projects from '../src/components/Layout/Projects';
import RightSidebar from '../src/components/RightSidebar';
import Intro from '../src/components/Intro';
import Contact from '../src/components/Contact';

export default function Home() {
	return (
		<div>
			<div className='fixed left-10 w-10 bottom-0 right-auto animate-fadedown'>
				<LeftSidebar />
			</div>

			<div className='fixed right-10 w-10 bottom-0 left-auto animate-fadedown'>
				<RightSidebar />
			</div>

			<Intro />

			<About />

			<Projects />

			<Contact />

		</div>
	);
}

export async function getStaticProps() {
	return {
		props: {},
		revalidate: 1000,
	};
}
