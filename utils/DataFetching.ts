import client from './ContentfulClient';

export async function getVideos() {
	const response = await client.getEntries({ content_type: 'video' });
	return response.items;
};

export async function getHomepageData() {
	const response = await client.getEntries({ content_type: 'homepage' })
	return response.items?.[0];
};

export async function getWorkData() {
	const response = await client.getEntries({ content_type: 'work' })
	return response.items?.[0];
};

export async function getHelloData() {
	const response = await client.getEntries({ content_type: 'hello' })
	return response.items?.[0];
};
