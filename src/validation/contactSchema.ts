import * as yup from "yup";

yup.addMethod(yup.string, "stripEmptyString", function () {
	return this.transform((value) => (value === "" ? undefined : value));
});

export const contactSchema = yup.object({
	name: yup.string().required("Name is required"),
	category: yup
		.string()
		.transform((value) => (value === "" ? undefined : value))
		.default("No Category"),

	phones: yup.array().of(
		yup
			.object({
				number: yup
					.string()
					.required("Phone number is required")
					.min(15, "Phone number must be at least 15 digits")
					.max(20, "Phone number must be at most 20 digits"),
				type: yup.string(),
			})
			.required("At least one phone number is required")
	),

	addresses: yup.array().of(
		yup
			.object({
				street: yup.string(),
				city: yup.string(),
				state: yup.string(),
				zip: yup.string(),
			})
			.test("atLeastOneChecked", "At least one property must be filled", (values) => {
				const { street, city, state, zip } = values;
				return !!street || !!city || !!state || !!zip;
			})
	),
});
