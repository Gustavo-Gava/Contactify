import theme from "../theme/theme";

import type { Styles } from "react-modal";

export const centeredModalStyles = {
	overlay: {
		backgroundColor: theme.colors.modal.overlay,
	},
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		width: "100%",
		maxWidth: "400px",
		padding: "16px",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		backgroundColor: "transparent",
		border: "none",
	},
} as Styles;
