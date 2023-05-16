const theme = {
	colors: {
		primary: {
			main: "#1E88E5",
			light: "#6AB7FF",
			transparent: "rgba(30, 136, 229, 0.2)",
		},

		actions: {
			success: "#4CAF50",
			error: "#F44336",
			warning: "#FFC107",
		},

		system: {
			background: "#080808",
			surface: "#282828",
		},

		text: {
			primary: "#FFFFFF",
			secondary: "#BDBDBD",
			disabled: "#757575",
			placeholder: "#616161",
		},

		modal: {
			overlay: "#50505099",
			background: "#303030",
		},
	},

	fonts: {
		family: {},

		size: {
			xs: "0.75rem",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
		},

		weight: {
			light: 300,
			normal: 400,
			medium: 500,
			bold: 700,
		},
	},

	border: {
		radius: {
			sm: "2px",
			base: "4px",
			lg: "6px",
			xl: "8px",
			full: "9999px",
		},
	},

	shadows: {
		sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
		md: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
		lg: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
		xl: "0 14px 24px 0 rgba(0, 0, 0, 0.3)",
	},
} as const;

export default theme;
