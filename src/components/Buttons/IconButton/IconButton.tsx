import styles from "./IconButton.module.css";
import { CSSProperties, useContext } from "react";
import { ThemeContext } from "../../../context/context";
import { LightMode } from "../../../themes/LightMode";

function IconButton(props: {
	onClick: () => void;
	icon: string;
	colour: string;
	iconHeight: number;
	iconWidth: number;
}) {
	const { theme } = useContext(ThemeContext);

	const style: CSSProperties =
		theme === LightMode
			? { outlineColor: props.colour }
			: {
					backgroundColor: props.colour,
					outlineColor: props.colour,
			  };

	return (
		<div
			className={`${styles.button}`}
			onClick={props.onClick}
			style={style}>
			<img
				src={props.icon}
				alt={"icon"}
				height={props.iconHeight}
				width={props.iconWidth}
			/>
		</div>
	);
}

export default IconButton;
