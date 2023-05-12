import { Fragment, useState } from "react";
import Modal from "react-modal";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { AddNewContactButton } from "./AddNewContactButton";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

import { api } from "../../services/api";

import { BsTelephone, BsPerson, BsPlus, BsMap } from "react-icons/bs";

import theme from "../../styles/theme/theme";
import * as S from "./styles";
import { toast } from "react-toastify";

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object({
	name: yup.string().required("Name is required"),
	lastname: yup.string(),
	category: yup.string(),

	phones: yup.array().of(
		yup.object({
			number: yup.string().required("Phone number is required"),
			type: yup.string(),
		})
	),

	addresses: yup.array().of(
		yup.object({
			street: yup.string(),
			city: yup.string(),
			state: yup.string(),
			zipcode: yup.string(),
		})
	),
});

type FormData = yup.InferType<typeof schema>;

export const AddNewContact = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
		defaultValues: {
			phones: [{ number: "", type: "" }],
			addresses: [{ street: "", city: "", state: "", zipcode: "" }],
		},
	});

	const addresses = useFieldArray({
		control,
		name: "addresses",
	});

	const phones = useFieldArray({
		control,
		name: "phones",
	});

	const onSubmit = async (data: FormData) => {
		console.log("Data: ", data);

		try {
			await api.post("/contacts", data);

			toast.success("Contact created successfully!");
			setIsModalOpen(false);
		} catch (err) {
			console.log(err);

			toast.error("Error creating contact!");
			toast.info("Try again later");
		}
	};

	return (
		<>
			<AddNewContactButton onClick={() => setIsModalOpen(!isModalOpen)} />

			<Modal isOpen={isModalOpen} contentLabel="Modal" style={S.customStyles}>
				<S.Form onSubmit={handleSubmit(onSubmit)}>
					<h3>New contact</h3>

					<S.InputGroup>
						<S.InputGroupContent>
							<BsPerson size={16} />

							<Input
								label="name"
								placeholder="Name"
								error={errors.name?.message}
								{...register("name")}
							/>
						</S.InputGroupContent>
					</S.InputGroup>

					<S.InputGroup>
						<S.InputGroupContent>
							<BsTelephone size={16} />

							<S.InputWrapper>
								{phones.fields.map((field, index) => (
									<Input
										key={field.id}
										placeholder={`Phone ${index + 1}`}
										removeFunction={index !== 0 ? () => phones.remove(index) : undefined}
										type="tel"
										error={errors.phones?.[index]?.number?.message}
										{...register(`phones.${index}.number`)}
									/>
								))}
							</S.InputWrapper>
						</S.InputGroupContent>

						<S.InputGroupFooter>
							<S.AddPhoneButton
								type="button"
								onClick={() => phones.append({ number: "", type: "" })}
							>
								<BsPlus size={16} />
								Add phone number
							</S.AddPhoneButton>
						</S.InputGroupFooter>
					</S.InputGroup>

					<S.InputGroup>
						<S.InputGroupContent>
							<BsMap size={16} />

							<S.InputWrapper>
								{addresses.fields.map((field, index) => {
									return (
										<Fragment key={field.id}>
											<Input
												placeholder="Street"
												removeFunction={index !== 0 ? () => addresses.remove(index) : undefined}
												error={errors.addresses?.[index]?.street?.message}
												{...register(`addresses.${index}.street`)}
											/>

											<Input
												placeholder="City"
												error={errors.addresses?.[index]?.city?.message}
												{...register(`addresses.${index}.city`)}
											/>

											<Input
												placeholder="State"
												error={errors.addresses?.[index]?.state?.message}
												{...register(`addresses.${index}.state`)}
											/>

											<Input
												placeholder="Zipcode"
												error={errors.addresses?.[index]?.zipcode?.message}
												{...register(`addresses.${index}.zipcode`)}
											/>
										</Fragment>
									);
								})}
							</S.InputWrapper>
						</S.InputGroupContent>

						<S.InputGroupFooter>
							<S.AddPhoneButton
								type="button"
								onClick={() => addresses.append({ city: "", state: "", street: "", zipcode: "" })}
							>
								<BsPlus size={16} />
								Add address
							</S.AddPhoneButton>
						</S.InputGroupFooter>
					</S.InputGroup>

					<Button type="submit">Save</Button>
				</S.Form>
			</Modal>
		</>
	);
};
