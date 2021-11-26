import About from '../src/components/About';
import LeftSidebar from '../src/components/Layout/LeftSidebar';
import Projects from '../src/components/Layout/Projects';
import RightSidebar from '../src/components/RightSidebar';
import Intro from '../src/components/Intro';
import Contact from '../src/components/Contact';
import { useContext, useEffect } from 'react';
import SkillsContext from '../src/store/SkillsContext';
import axios from 'axios';

function Home() {
	const { dispatch, skills, isLoading, error } = useContext(SkillsContext);

	// useEffect(() => {
	// 	dispatch({ type: 'FETCHING_SUCCESS', payload: sortedData });
	// }, []);
	// console.log(sortedData);
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

// export async function getStaticProps() {
// 	const res = await axios.get('https://fabiocatino.com/api/get-skills');
// 	const {
// 		data: { data },
// 	} = res;
// 	const sortedData = data.sort((a, b) => (a.level < b.level ? 1 : -1));

// 	return {
// 		props: { sortedData },
// 	};
// }
