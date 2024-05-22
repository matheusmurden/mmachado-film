interface LoaderProps {
	src: string;
	width: number;
	quality?: number;
}

// Docs: https://www.contentful.com/developers/docs/references/images-api/
export default function contentfulLoader({ src, width, quality = 75 }: LoaderProps) {
	const url = new URL(`https:${src}`)
	url.searchParams.set('fm', 'webp')
	url.searchParams.set('w', width.toString())
	url.searchParams.set('q', (quality).toString())
	return url.href
  }