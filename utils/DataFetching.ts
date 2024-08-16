import client from './ContentfulClient';

export interface Metadata {
	fields: {
		image: {
			fields: {
				file: {
					url: string,
					details: {
						image: {
							width: number,
							height: number
						}
					}
				}
			}
		},
		title: string,
		description: string
	}
}

export interface Image {
	fields: {
		description: string,
		file: {
			url: string,
			details: {
				image: {
					width: number,
					height: number
				}
			}
		}
	}
}

export interface Video {
	fields: {
		description?: string;
		file: {
			url: string,
			details: {
				size: number,
			},
			fileName: string;
			contentType: string;
		}
	}
}

export interface VideoCategory {
	fields: {
		title: string;
	}
} 

export interface VideoItem {
	fields: {
		category: string,
		categories: VideoCategory[],
		project: string,
		brand: string,
		vimeo: string,
		aspectRatio: string,
		mp4: Video,
		thumbnail: Image
	}
}

export interface HomePageData {
	fields: {
		videoLogo: Video,
		logo: Image,
		videos: VideoItem[],
		meta: Metadata
	}
}

export interface WorkPageData {
	fields: {
		heading: string,
		videos: VideoItem[],
		meta: Metadata
	}
}

export interface HelloPageData {
	fields: {
		heading: string,
		instagram: string,
		email: string,
		meta: Metadata
	}
}

export async function getHomepageData() {
	const response = await client.getEntries({ content_type: 'homepage', limit: 1, include: 10 })
	return response.items?.[0] as unknown as HomePageData;
};

export async function getWorkData() {
	const response = await client.getEntries({ content_type: 'work', limit: 1, include: 10 })
	return response.items?.[0] as unknown as WorkPageData;
};

export async function getHelloData() {
	const response = await client.getEntries({ content_type: 'hello' })
	return response.items?.[0]as unknown as HelloPageData;
};
