import { ContentfulClientApi } from "contentful";

const contentful = require('contentful')
const client: ContentfulClientApi<any> = contentful.createClient({
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  space: process.env.CONTENTFUL_SPACE_ID
})

export default client;
