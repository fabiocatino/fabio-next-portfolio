import { createContext, useReducer } from 'react';
import SkillsReducer from './SkillsReducer';

const INITIAL_STATE = {
	skills: [],
	error: true,
	isLoading: false,
};
const SkillsContext = createContext(INITIAL_STATE);
export default SkillsContext;

export const SkillsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SkillsReducer, INITIAL_STATE);
	return (
		<SkillsContext.Provider
			value={{
				skills: state.skills,
				error: state.error,
				isLoading: state.isLoading,
				dispatch,
			}}
		>
			{children}
		</SkillsContext.Provider>
	);
};
