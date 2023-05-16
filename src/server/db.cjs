/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { faker } = require("@faker-js/faker");

module.exports = function () {
	const data = { contacts: [] };

	// Create 1000 users
	for (let i = 0; i < 100; i++) {
		const contact = {
			id: i + 1,
			name: faker.name.firstName(),
			lastname: faker.name.lastName(),
			category: faker.helpers.arrayElement(["Family", "Friends", "Work"]),

			phones: [
				{
					id: 1,
					number: faker.phone.number("+## (##) #####-####"),
				},
			],

			addresses: [
				{
					id: 1,
					street: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					zip: faker.address.zipCode(),
				},
			],
		};

		data.contacts.push(contact);
	}

	return data;
};
