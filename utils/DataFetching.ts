import client from './ContentfulClient';

interface HomePageData {
	fields: {
		logo: {
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
		},
		videos: {
			fields: {
				category: string,
				project: string,
				brand: string,
				vimeo: string,
				aspectRatio: string,
				mp4: {
					fields: {
						file: {
							url: string,
							details: {
								size: number,
							},
							fileName: string;
							contentType: string;
						}
					}
				},
				thumbnail: {
					fields: {
						description: string,
						file: {
							url: string,
							details: {
								size: number,
								image: {
									width: number,
									height: number
								}
							},
							fileName: string;
							contentType: string;
						}
					}
				}
			}
		}[],
		meta: {
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
	}
}

interface WorkPageData {
	fields: {
		heading: string,
		videos: {
			fields: {
				category: string,
				project: string,
				brand: string,
				vimeo: string,
				aspectRatio: string,
				mp4: {
					fields: {
						file: {
							url: string,
							details: {
								size: number,
							},
							fileName: string;
							contentType: string;
						}
					}
				},
				thumbnail: {
					fields: {
						description: string,
						file: {
							url: string,
							details: {
								size: number,
								image: {
									width: number,
									height: number
								}
							},
							fileName: string;
							contentType: string;
						}
					}
				}
			}
		}[],
		meta: {
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
	}
}

interface HelloPageData {
	fields: {
		heading: string,
		instagram: string,
		email: string,
		meta: {
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
	}
}

export async function getHomepageData() {
	const response = await client.getEntries({ content_type: 'homepage' })
	return response.items?.[0] as unknown as HomePageData;
};

export async function getWorkData() {
	const response = await client.getEntries({ content_type: 'work' })
	return response.items?.[0] as unknown as WorkPageData;
};

export async function getHelloData() {
	const response = await client.getEntries({ content_type: 'hello' })
	return response.items?.[0]as unknown as HelloPageData;
};
