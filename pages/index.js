import axios from 'axios';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Intro from '../src/components/Intro';
import LeftSidebar from '../src/components/Layout/LeftSidebar';
import Projects from '../src/components/Layout/Projects';
import RightSidebar from '../src/components/RightSidebar';
import { userAtom, projectAtom } from '../src/store/atoms';

function Home({ sortedData, description, title, projects }) {
	const setSkills = useSetRecoilState(userAtom);
	const setProjects = useSetRecoilState(projectAtom);
	useEffect(() => {
		setSkills({ skills: sortedData, description, title });
		setProjects(projects);
	}, [description, setSkills, sortedData, setProjects, title, projects]);

	return (
		<div>
			<div className='fixed left-10 w-10 bottom-0 right-auto animate-fadedown'>
				<LeftSidebar />
			</div>

			<div className='fixed right-10 w-10 bottom-0 left-auto animate-fadedown'>
				<RightSidebar />
			</div>

			<Intro />

			<About description={description} />

			<Projects projects={projects} />

			<Contact />
		</div>
	);
}

export default Home;

export async function getServerSideProps() {
	const res = await axios.get('https://fabiocatino.com/api/get-skills');
	const res1 = await axios.get('https://fabiocatino.com/api/user-info');
	const res2 = await axios.get('https://fabiocatino.com/api/get-projects');
	const {
		data: { data },
	} = res;
	const {
		data: { description, socials, title },
	} = res1;
	const {
		data: { projects },
	} = res2;

	const sortedData = data.sort((a, b) => (a.level < b.level ? 1 : -1));

	// if (!data || !res1 || !res2) {
	// 	return {
	// 		notFound: true,
	// 	};
	// }
	return {
		props: {
			sortedData: sortedData ?? [],
			description: description ?? '',
			socials: socials ?? [],
			title: title ?? '',
			projects: projects ?? [],
		},
	};
}
