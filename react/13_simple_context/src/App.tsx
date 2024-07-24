import { useState } from 'react'
import ThemeContext,{themes,ThemeType} from './context/ThemeContext';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import ThemeButton from './components/ThemeButton';

interface State {
	theme:ThemeType;
}

function App() {
	const [state, setState] = useState({
		theme:themes.dark
	})

	const toggleTheme = () => {
		if(state.theme === themes.dark) {
			setState({
				theme:themes.light
			})
		} else {
			setState({
				theme:themes.dark
			})
		}
	}

	return (
		<>
			<ThemeContext.Provider value={state.theme}>
				<Headline>
				Talviolympialaiset 2030 myönnettiin ehdollisena Ranskalle
				</Headline>
				<Paragraph>
				Kansainvälinen olympiakomitea (KOK) on antanut hyväksyntänsä Ranskalle vuoden 2030 talviolympialaisten järjestämisestä.

Talviolympialaisten 2030 suorituspaikat on määrä pitää Auvergne-Rhonen ja Provence-Alpes-Cote d’Azur’n alueilla.
				</Paragraph>
				<ThemeButton toggleTheme={toggleTheme}/>
			</ThemeContext.Provider>
		</>
  )
}

export default App
