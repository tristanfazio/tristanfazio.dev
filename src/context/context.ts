import { createContext, Dispatch, SetStateAction } from "react";
import { Theme } from "../hooks/useTheme";

interface ThemeContextInterface {
	theme: Theme;
	setTheme: Dispatch<SetStateAction<Theme>>;
}
export const ThemeContext = createContext<ThemeContextInterface>(undefined!);
