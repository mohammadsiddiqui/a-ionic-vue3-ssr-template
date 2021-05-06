import createApp from "./main.js";

export default function () {
	const { app, router } = createApp({});

	return { app, router };
}
