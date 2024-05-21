import client from './ContentfulClient';

export async function getVideos() {
	const response = await client.getEntries();
	return response.items;
};
