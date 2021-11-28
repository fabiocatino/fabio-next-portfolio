import { atom, selector } from 'recoil';

export const userAtom = atom({
	key: 'userAtomState',
	default: {
		title: '',
		description: '',
		skills: [],
		error: false,
		isLoading: false,
	},
});

export const projectAtom = atom({
	key: 'projectAtomState',
	default: {
		name: '',
		description: '',
		externalLink: '',
		gitHub: '',
		image: '',
		tags: [],
		isFeatured: false,
		error: false,
		isLoading: false,
	},
});

export const statusAtom = atom({
	key: 'statusAtomState',
	default: {
		error: false,
		isLoading: false,
	},
});

export const tagAtom = atom({
	key: 'tagAtomState',
	default: {
		tags: [],
	},
});

export const filteredFeaturedProjects = selector({
	key: 'filteredProjectAtomState',
	get: ({ get }) => {
		const projects = get(projectAtom);
		let filteredList = [];

		for (let i in projects) {
			filteredList.push(projects[i]);
		}

		return filteredList.filter((item) => item.isFeatured);
	},
});

export const otherProjects = selector({
	key: 'notFilteredProjectAtomState',
	get: ({ get }) => {
		const projects = get(projectAtom);
		let unfilteredList = [];
		for (let i in projects) {
			if (projects[i]) {
				unfilteredList.push(projects[i]);
			}
		}

		return unfilteredList.filter((item) => !item.isFeatured);
	},
});
