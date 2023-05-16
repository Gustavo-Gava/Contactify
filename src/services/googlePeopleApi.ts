import axios from "axios";

export const googlePeopleApi = axios.create({
	baseURL: "https://people.googleapis.com",
});
