// Description: This file defines a function that returns the URL of the given path.
const getUrl = (path: string) =>
    process.env.NODE_ENV === 'development'
    ? `http://localhost:3000${path}`
    : process.env.VERCEL_URL + '/' + path;

export default getUrl;