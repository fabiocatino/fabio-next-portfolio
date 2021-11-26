import axios from 'axios';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Intro from '../src/components/Intro';
import LeftSidebar from '../src/components/Layout/LeftSidebar';
import Projects from '../src/components/Layout/Projects';
import RightSidebar from '../src/components/RightSidebar';
import { skillAtom } from '../src/store/atoms';

function Home({ sortedData, description }) {
	const setSkills = useSetRecoilState(skillAtom);
	useEffect(() => {
		setSkills({ skills: sortedData, description: description });
	}, [description, setSkills, sortedData]);
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

export default Home;

export async function getStaticProps() {
	const res = await axios.get('https://fabiocatino.com/api/get-skills');
	const res1 = await axios.get('https://fabiocatino.com/api/user-info');
	const {
		data: { data },
	} = res;
	const {
		data: { description, socials },
	} = res1;
	const sortedData = data.sort((a, b) => (a.level < b.level ? 1 : -1));

	if (!data || !res1) {
		return {
			notFound: true,
		};
	}

	return {
		props: { sortedData, description, socials },
		revalidate: 10,
	};
}
