import { createContext, Dispatch, SetStateAction } from "react";
import { Theme } from "../hooks/useTheme";
import {LightMode} from "../themes/LightMode";

interface ThemeContextInterface {
	theme: Theme;
	setTheme: Dispatch<SetStateAction<Theme>>;
}
export const ThemeContext = createContext<ThemeContextInterface>({theme: LightMode, setTheme: () => {} } );
