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
		projects: [],
	},
});

export const filteredFeaturedProjects = selector({
	key: 'filteredProjectAtomState',
	get: ({ get }) => {
		const { projects } = get(projectAtom);
		return projects.filter((item) => item.isFeatured);
	},
});

export const otherProjects = selector({
	key: 'notFilteredProjectAtomState',
	get: ({ get }) => {
		const { projects } = get(projectAtom);
		return projects.filter((item) => !item.isFeatured);
	},
});
