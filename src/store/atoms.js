import { atom } from 'recoil';

export const skillAtom = atom({
	key: 'skillAtom',
	default: {
		description: '',
		skills: [],
		error: false,
		isLoading: false,
	},
});

export const projectAtom = atom({
	key: 'projectAtom',
	default: {
		description: '',
		skills: [],
		error: false,
		isLoading: false,
	},
});
